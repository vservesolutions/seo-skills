/** Small stderr logger so stdout stays reserved for command output. */

const LEVELS = { debug: 10, info: 20, warn: 30, error: 40, silent: 100 };

let threshold = LEVELS[String(process.env.SEO_SKILLS_LOG || 'info').toLowerCase()] ?? LEVELS.info;

export function setLogLevel(level) {
  threshold = LEVELS[String(level).toLowerCase()] ?? threshold;
}

function write(level, scope, message, extra) {
  if ((LEVELS[level] ?? 20) < threshold) return;
  const prefix = `[${new Date().toISOString().slice(11, 19)}] ${level.toUpperCase().padEnd(5)}`;
  const scopeText = scope ? ` ${scope}:` : '';
  const suffix = extra === undefined ? '' : ` ${typeof extra === 'string' ? extra : JSON.stringify(extra)}`;
  process.stderr.write(`${prefix}${scopeText} ${message}${suffix}\n`);
}

export function createLogger(scope) {
  return {
    debug: (message, extra) => write('debug', scope, message, extra),
    info: (message, extra) => write('info', scope, message, extra),
    warn: (message, extra) => write('warn', scope, message, extra),
    error: (message, extra) => write('error', scope, message, extra)
  };
}

export const logger = createLogger('');

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
