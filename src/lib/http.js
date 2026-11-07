/** HTTP helper: timeouts, retries with backoff, conditional GET, size caps. */

import { createLogger, sleep } from './log.js';

const log = createLogger('http');

export const DEFAULT_USER_AGENT = 'SEOSkillsBot/1.0 (+local SEO research collector)';
export const HTML_ACCEPT = 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.5';
export const FEED_ACCEPT =
  'application/rss+xml, application/atom+xml, application/xml;q=0.9, text/xml;q=0.9, */*;q=0.5';

export class HttpError extends Error {
  constructor(message, { status = 0, url = '' } = {}) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
    this.url = url;
  }
}

function charsetOf(contentType) {
  const match = /charset\s*=\s*"?([^";]+)"?/i.exec(contentType || '');
  if (!match) return 'utf-8';
  const label = match[1].trim().toLowerCase();
  try {
    new TextDecoder(label);
    return label;
  } catch {
    return 'utf-8';
  }
}

function retryDelayMs(attempt, retryAfterHeader) {
  const retryAfter = Number(retryAfterHeader);
  if (Number.isFinite(retryAfter) && retryAfter > 0) return Math.min(retryAfter * 1000, 8000);
  const base = 600 * 2 ** attempt;
  return base + Math.floor(Math.random() * 250);
}

/**
 * Fetch a URL as text.
 * Returns `{ notModified: true }` when the server answers 304.
 */
export async function fetchText(url, options = {}) {
  const {
    timeoutMs = 20000,
    retries = 2,
    headers = {},
    etag = null,
    lastModified = null,
    userAgent = DEFAULT_USER_AGENT,
    accept = FEED_ACCEPT,
    maxBytes = 6_000_000
  } = options;

  let lastError = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    const requestHeaders = {
      'user-agent': userAgent,
      accept,
      'accept-language': 'en-US,en;q=0.9',
      ...headers
    };
    if (etag) requestHeaders['if-none-match'] = etag;
    if (lastModified) requestHeaders['if-modified-since'] = lastModified;

    try {
      const response = await fetch(url, {
        headers: requestHeaders,
        redirect: 'follow',
        signal: AbortSignal.timeout(timeoutMs)
      });

      if (response.status === 304) {
        return { notModified: true, status: 304, url: response.url || url, headers: {} };
      }

      if (!response.ok) {
        const error = new HttpError(`HTTP ${response.status} ${response.statusText}`, {
          status: response.status,
          url
        });
        if ((response.status === 429 || response.status >= 500) && attempt < retries) {
          const waitMs = retryDelayMs(attempt, response.headers.get('retry-after'));
          log.warn(`HTTP ${response.status} for ${url}, retrying in ${waitMs}ms`);
          await sleep(waitMs);
          lastError = error;
          continue;
        }
        throw error;
      }

      const announced = Number(response.headers.get('content-length'));
      if (Number.isFinite(announced) && announced > maxBytes) {
        throw new HttpError(`Response too large (${announced} bytes)`, { status: 0, url });
      }

      const buffer = Buffer.from(await response.arrayBuffer());
      if (buffer.byteLength > maxBytes) {
        throw new HttpError(`Response too large (${buffer.byteLength} bytes)`, { status: 0, url });
      }

      const contentType = response.headers.get('content-type') || '';
      const body = new TextDecoder(charsetOf(contentType)).decode(buffer);

      return {
        status: response.status,
        url: response.url || url,
        contentType,
        body,
        headers: {
          etag: response.headers.get('etag'),
          lastModified: response.headers.get('last-modified')
        }
      };
    } catch (error) {
      lastError = error;
      const isNetwork = error?.name === 'TimeoutError' || error?.name === 'AbortError' || error?.name === 'TypeError';
      const retryable = isNetwork || (error instanceof HttpError && (error.status === 429 || error.status >= 500));
      if (attempt >= retries || !retryable) break;
      const waitMs = retryDelayMs(attempt, null);
      log.warn(`${error.message} for ${url}, retrying in ${waitMs}ms`);
      await sleep(waitMs);
    }
  }

  if (lastError?.name === 'TimeoutError' || lastError?.name === 'AbortError') {
    throw new HttpError(`Timed out after ${timeoutMs}ms`, { url });
  }
  throw lastError ?? new HttpError('Request failed', { url });
}
