/** Project paths and configuration loading. */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

export function projectPaths(root = PROJECT_ROOT) {
  return {
    root,
    configDir: path.join(root, 'config'),
    topicsFile: path.join(root, 'config', 'topics.json'),
    sourcesFile: path.join(root, 'config', 'sources.json'),
    dataDir: path.join(root, 'data'),
    findingsFile: path.join(root, 'data', 'findings.jsonl'),
    stateFile: path.join(root, 'data', 'state.json'),
    runsDir: path.join(root, 'data', 'runs'),
    logFile: path.join(root, 'data', 'update.log'),
    skillsDir: path.join(root, 'skills'),
    libraryConfigFile: path.join(root, 'config', 'skill-library.json'),
    libraryDir: path.join(root, 'library'),
    libraryFile: path.join(root, 'data', 'library.jsonl'),
    libraryStateFile: path.join(root, 'data', 'library-state.json'),
    siteDir: path.join(root, 'site'),
    dashboardFile: path.join(root, 'site', 'index.html')
  };
}

export async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

export async function readJson(file, fallback) {
  try {
    const raw = await fs.readFile(file, 'utf8');
    return JSON.parse(raw);
  } catch (error) {
    if (error.code === 'ENOENT') return fallback;
    throw new Error(`Cannot read ${file}: ${error.message}`);
  }
}

export async function writeJson(file, value) {
  await ensureDir(path.dirname(file));
  const temp = `${file}.tmp`;
  await fs.writeFile(temp, JSON.stringify(value, null, 2) + '\n', 'utf8');
  await fs.rename(temp, file);
}

export async function loadTopics(root = PROJECT_ROOT) {
  const paths = projectPaths(root);
  const config = await readJson(paths.topicsFile, null);
  if (!config || !Array.isArray(config.topics) || !config.topics.length) {
    throw new Error(`No topics found in ${paths.topicsFile}`);
  }
  return config.topics;
}

export async function loadSources(root = PROJECT_ROOT) {
  const paths = projectPaths(root);
  const config = await readJson(paths.sourcesFile, null);
  if (!config || !Array.isArray(config.sources)) {
    throw new Error(`No sources found in ${paths.sourcesFile}`);
  }
  return {
    settings: {
      perSourceLimit: 10,
      maxFulltextPerRun: 15,
      fulltext: true,
      respectRobots: true,
      delayMs: 700,
      timeoutMs: 20000,
      dropAfterDays: 1095,
      minTextLength: 120,
      ...(config.settings || {})
    },
    userAgent: config.userAgent || 'SEOSkillsBot/1.0 (+local SEO research collector)',
    sources: config.sources
  };
}
