/**
 * Minimal, dependency-free XML parser.
 *
 * It is intentionally forgiving: feeds in the wild contain stray ampersands,
 * unclosed tags and CDATA blocks. We only need a navigable element tree with
 * mixed text, so this handles comments, CDATA, processing instructions,
 * DOCTYPE, self-closing tags and quoted `>` inside attributes.
 */

const NAMED_ENTITIES = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
  ndash: '\u2013',
  mdash: '\u2014',
  hellip: '\u2026',
  lsquo: '\u2018',
  rsquo: '\u2019',
  ldquo: '\u201c',
  rdquo: '\u201d',
  laquo: '\u00ab',
  raquo: '\u00bb',
  copy: '\u00a9',
  reg: '\u00ae',
  trade: '\u2122',
  times: '\u00d7',
  middot: '\u00b7',
  bull: '\u2022',
  deg: '\u00b0'
};

export function decodeEntities(value) {
  return String(value ?? '').replace(/&(#\d+|#x[0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]*);/g, (match, body) => {
    if (body[0] === '#') {
      const hex = body[1] === 'x' || body[1] === 'X';
      const code = hex ? parseInt(body.slice(2), 16) : parseInt(body.slice(1), 10);
      if (!Number.isFinite(code) || code <= 0 || code > 0x10ffff) return match;
      try {
        return String.fromCodePoint(code);
      } catch {
        return match;
      }
    }
    const named = NAMED_ENTITIES[body.toLowerCase()];
    return named ?? match;
  });
}

function findTagEnd(src, start) {
  let quote = null;
  for (let i = start + 1; i < src.length; i++) {
    const ch = src[i];
    if (quote) {
      if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'") {
      quote = ch;
      continue;
    }
    if (ch === '>') return i;
  }
  return -1;
}

function parseAttributes(raw) {
  const attrs = {};
  const re = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;
  let m;
  while ((m = re.exec(raw))) {
    const key = m[1].toLowerCase();
    if (key in attrs) continue;
    const value = m[2] ?? m[3] ?? m[4] ?? '';
    attrs[key] = decodeEntities(value);
  }
  return attrs;
}

export function parseXml(input) {
  const src = String(input ?? '');
  const root = { name: '#document', attrs: {}, children: [], text: '' };
  const stack = [root];
  const appendText = (value) => {
    if (value) stack[stack.length - 1].text += value;
  };

  let i = 0;
  while (i < src.length) {
    const lt = src.indexOf('<', i);
    if (lt === -1) {
      appendText(decodeEntities(src.slice(i)));
      break;
    }
    if (lt > i) appendText(decodeEntities(src.slice(i, lt)));

    if (src.startsWith('<!--', lt)) {
      const end = src.indexOf('-->', lt + 4);
      i = end === -1 ? src.length : end + 3;
      continue;
    }

    if (src.startsWith('<![CDATA[', lt)) {
      const end = src.indexOf(']]>', lt + 9);
      const raw = end === -1 ? src.slice(lt + 9) : src.slice(lt + 9, end);
      appendText(raw);
      i = end === -1 ? src.length : end + 3;
      continue;
    }

    if (src.startsWith('<?', lt)) {
      const end = src.indexOf('?>', lt + 2);
      i = end === -1 ? src.length : end + 2;
      continue;
    }

    if (src.startsWith('<!', lt)) {
      // DOCTYPE may contain an internal subset with nested angle brackets.
      let depth = 0;
      let j = lt;
      for (; j < src.length; j++) {
        const ch = src[j];
        if (ch === '<') depth++;
        else if (ch === '>') {
          depth--;
          if (depth === 0) {
            j++;
            break;
          }
        }
      }
      i = j;
      continue;
    }

    const gt = findTagEnd(src, lt);
    if (gt === -1) {
      appendText(decodeEntities(src.slice(lt)));
      break;
    }
    const raw = src.slice(lt + 1, gt);
    i = gt + 1;

    if (raw.startsWith('/')) {
      const name = raw.slice(1).trim().toLowerCase();
      if (!name) continue;
      for (let k = stack.length - 1; k > 0; k--) {
        if (stack[k].name === name) {
          stack.length = k;
          break;
        }
      }
      continue;
    }

    const selfClosing = raw.endsWith('/');
    const body = selfClosing ? raw.slice(0, -1) : raw;
    const nameMatch = /^([^\s/>]+)/.exec(body);
    if (!nameMatch) continue;
    const name = nameMatch[1].toLowerCase();
    const node = {
      name,
      attrs: parseAttributes(body.slice(nameMatch[0].length)),
      children: [],
      text: ''
    };
    stack[stack.length - 1].children.push(node);
    if (!selfClosing) stack.push(node);
  }

  return root;
}

export function childrenNamed(node, names) {
  if (!node || !node.children) return [];
  const set = new Set(Array.isArray(names) ? names : [names]);
  return node.children.filter((child) => set.has(child.name));
}

export function firstNamed(node, names) {
  return childrenNamed(node, names)[0] ?? null;
}

export function findAll(node, names, out = []) {
  if (!node) return out;
  const set = new Set(Array.isArray(names) ? names : [names]);
  for (const child of node.children ?? []) {
    if (set.has(child.name)) out.push(child);
    findAll(child, names, out);
  }
  return out;
}

export function textOf(node) {
  if (!node) return '';
  let out = node.text ?? '';
  for (const child of node.children ?? []) out += ' ' + textOf(child);
  return out;
}

export function attrOf(node, name) {
  if (!node || !node.attrs) return null;
  const value = node.attrs[String(name).toLowerCase()];
  return value === undefined || value === null || value === '' ? null : value;
}
