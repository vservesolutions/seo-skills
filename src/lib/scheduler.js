/** Daily scheduling: Windows Task Scheduler, cron output, or a long-running loop. */

import { execFile } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import { ensureDir, projectPaths } from './config.js';
import { createLogger } from './log.js';
import { runUpdate } from './update.js';

const execFileAsync = promisify(execFile);
const log = createLogger('schedule');

export const TASK_NAME = 'SEO Skills Daily Update';
const CLI_PATH = fileURLToPath(new URL('../cli.js', import.meta.url));

export function parseTime(value, fallback = '06:00') {
  const raw = String(value || fallback).trim();
  const match = /^([01]?\d|2[0-3]):([0-5]\d)$/.exec(raw);
  if (!match) throw new Error(`Invalid time "${raw}" — use 24h HH:MM, e.g. 06:00.`);
  return { hour: Number(match[1]), minute: Number(match[2]), label: raw.padStart(5, '0') };
}

export function nextRunAt({ hour, minute }, from = new Date()) {
  const next = new Date(from);
  next.setHours(hour, minute, 0, 0);
  if (next.getTime() <= from.getTime()) next.setDate(next.getDate() + 1);
  return next;
}

export function cronLine(hour, minute) {
  const paths = projectPaths();
  return `${minute} ${hour} * * * cd ${JSON.stringify(paths.root)} && node src/cli.js update >> data/update.log 2>&1`;
}

export function wrapperPath() {
  return path.join(projectPaths().root, 'update-daily.cmd');
}

function buildWrapper() {
  const paths = projectPaths();
  return [
    '@echo off',
    'setlocal',
    'cd /d "%~dp0"',
    'if not exist "data" mkdir "data"',
    'echo [%DATE% %TIME%] SEO skills update start>>"data\\update.log"',
    `"${process.execPath}" "${CLI_PATH}" update >>"data\\update.log" 2>&1`,
    'echo [%DATE% %TIME%] SEO skills update exit %ERRORLEVEL%>>"data\\update.log"',
    ''
  ].join('\r\n');
}

/**
 * Register a daily Windows scheduled task.
 * @returns {Promise<object>}
 */
export async function installDaily(time = '06:00') {
  const parsed = parseTime(time);
  if (process.platform !== 'win32') {
    return {
      platform: process.platform,
      installed: false,
      message:
        `Automatic install is Windows-only. Add this line to your crontab (crontab -e):\n  ${cronLine(parsed.hour, parsed.minute)}`
    };
  }

  const file = wrapperPath();
  await fs.writeFile(file, buildWrapper(), 'utf8');

  const { stdout } = await execFileAsync('schtasks', [
    '/Create',
    '/F',
    '/SC',
    'DAILY',
    '/ST',
    parsed.label,
    '/TN',
    TASK_NAME,
    '/TR',
    file
  ]);

  return {
    platform: process.platform,
    installed: true,
    taskName: TASK_NAME,
    time: parsed.label,
    wrapper: file,
    message: `Daily task "${TASK_NAME}" scheduled for ${parsed.label}. Logs: data/update.log`,
    stdout: stdout.trim()
  };
}

export async function showSchedule() {
  if (process.platform !== 'win32') {
    const { hour, minute } = parseTime('06:00');
    return { platform: process.platform, installed: null, message: `Add to crontab:\n  ${cronLine(hour, minute)}` };
  }
  try {
    const { stdout } = await execFileAsync('schtasks', ['/Query', '/TN', TASK_NAME, '/V', '/FO', 'LIST']);
    return { platform: process.platform, installed: true, message: stdout.trim() };
  } catch (error) {
    return {
      platform: process.platform,
      installed: false,
      message: `No scheduled task named "${TASK_NAME}" is registered. Install it with:\n  node src/cli.js schedule install --time 06:00`
    };
  }
}

export async function removeDaily() {
  if (process.platform !== 'win32') {
    return { removed: false, message: 'Nothing to remove on this platform — edit your crontab instead.' };
  }
  try {
    const { stdout } = await execFileAsync('schtasks', ['/Delete', '/F', '/TN', TASK_NAME]);
    return { removed: true, message: `Removed task "${TASK_NAME}".`, stdout: stdout.trim() };
  } catch (error) {
    return { removed: false, message: `Could not remove "${TASK_NAME}": ${error.message}` };
  }
}

function sleepUntil(target) {
  const ms = Math.max(0, Math.min(target.getTime() - Date.now(), 2_147_000_000));
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Long-running fallback when Task Scheduler/cron is not available. */
export async function runLoop(time = '06:00') {
  const parsed = parseTime(time);
  const paths = projectPaths();
  await ensureDir(paths.dataDir);
  log.info(`Daily update loop started (${parsed.label} local time). Ctrl+C to stop.`);

  for (;;) {
    const target = nextRunAt(parsed);
    log.info(`Next update: ${target.toISOString()}`);
    await sleepUntil(target);
    if (Date.now() < target.getTime()) continue;
    try {
      await runUpdate({});
      log.info('Scheduled update finished.');
    } catch (error) {
      log.error(`Scheduled update failed: ${error.message}`);
      await fs
        .appendFile(paths.logFile, `${new Date().toISOString()} scheduled update failed: ${error.message}\n`)
        .catch(() => {});
    }
  }
}
