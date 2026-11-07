/** The findings knowledge base: append-only JSONL, dedupe and merge. */

import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { ensureDir } from './config.js';
import { normalizeWhitespace, similarity } from './text.js';

const TRACKING_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id',
  'utm_name',
  'gclid',
  'fbclid',
  'mc_cid',
  'mc_eid',
  'ref',
  'source'
];

export function normalizeUrl(input) {
  const raw = String(input ?? '').trim();
  if (!raw) return '';
  try {
    const url = new URL(raw);
    url.hash = '';
    for (const param of TRACKING_PARAMS) url.searchParams.delete(param);
    url.hostname = url.hostname.toLowerCase();
    url.protocol = url.protocol.toLowerCase();
    if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
      url.pathname = url.pathname.replace(/\/+$/, '');
    }
    return url.toString();
  } catch {
    return raw;
  }
}

export function hash(value, length = 12) {
  return createHash('sha1').update(String(value)).digest('hex').slice(0, length);
}

export function findingId(url) {
  return hash(normalizeUrl(url), 12);
}

export async function readFindings(file) {
  try {
    const raw = await fs.readFile(file, 'utf8');
    const rows = [];
    for (const line of raw.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      try {
        const parsed = JSON.parse(trimmed);
        if (parsed && parsed.id && parsed.url) rows.push(parsed);
      } catch {
        // Skip corrupt lines rather than losing the whole knowledge base.
      }
    }
    return rows;
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
}

export async function writeFindings(file, findings) {
  await ensureDir(path.dirname(file));
  const temp = `${file}.tmp`;
  const body = findings.map((finding) => JSON.stringify(finding)).join('\n') + (findings.length ? '\n' : '');
  await fs.writeFile(temp, body, 'utf8');
  await fs.rename(temp, file);
}

function mergeKeyPoints(primary = [], secondary = []) {
  const merged = [];
  for (const point of [...primary, ...secondary]) {
    const text = normalizeWhitespace(point);
    if (!text) continue;
    if (merged.some((kept) => similarity(kept, text) > 0.72)) continue;
    merged.push(text);
    if (merged.length >= 8) break;
  }
  return merged;
}

function byRecency(a, b) {
  const left = new Date(a.publishedAt || a.fetchedAt || 0).getTime();
  const right = new Date(b.publishedAt || b.fetchedAt || 0).getTime();
  return right - left;
}

/**
 * Merge new findings into the existing knowledge base.
 * Existing entries keep their first-seen timestamp; content changes update in place.
 */
export function mergeFindings(existing, incoming) {
  const map = new Map(existing.map((finding) => [finding.id, finding]));
  let added = 0;
  let updated = 0;

  for (const finding of incoming) {
    const previous = map.get(finding.id);
    if (!previous) {
      map.set(finding.id, {
        ...finding,
        firstSeen: finding.firstSeen || finding.fetchedAt,
        lastSeen: finding.fetchedAt
      });
      added++;
      continue;
    }

    const changed = previous.contentHash !== finding.contentHash;
    map.set(finding.id, {
      ...previous,
      ...finding,
      firstSeen: previous.firstSeen || previous.fetchedAt || finding.firstSeen || finding.fetchedAt,
      lastSeen: finding.fetchedAt,
      publishedAt: previous.publishedAt || finding.publishedAt,
      keyPoints: mergeKeyPoints(finding.keyPoints, previous.keyPoints)
    });
    if (changed) updated++;
  }

  return {
    findings: [...map.values()].sort(byRecency),
    added,
    updated
  };
}

/** Drop findings older than the retention window (keeps the KB bounded). */
export function pruneFindings(findings, maxAgeDays = 1095, now = new Date()) {
  if (!maxAgeDays || maxAgeDays <= 0) return findings;
  const cutoff = now.getTime() - maxAgeDays * 86_400_000;
  return findings.filter((finding) => {
    const stamp = new Date(finding.publishedAt || finding.firstSeen || finding.fetchedAt || 0).getTime();
    return !Number.isFinite(stamp) || stamp >= cutoff;
  });
}

export function findingsForTopic(findings, topicId) {
  return findings.filter((finding) => (finding.topics || []).some((topic) => topic.id === topicId));
}
