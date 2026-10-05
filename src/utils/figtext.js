// Label markup for figure text: `q_k`, `σ_{max}`, `x^2`, `L^{3/4}`.
// Returns runs { text, shift } where shift is 0 (normal), 'sub' or 'sup'.

/** Splits a label into normal / subscript / superscript runs. */
export function parseLabel(label) {
  const chars = Array.from(String(label ?? ''));
  const runs = [];
  let buf = '';
  const flush = () => { if (buf) { runs.push({ text: buf, shift: 0 }); buf = ''; } };

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    if (ch === '\\' && (chars[i + 1] === '_' || chars[i + 1] === '^')) {
      buf += chars[i + 1];
      i++;
      continue;
    }
    if ((ch === '_' || ch === '^') && i + 1 < chars.length) {
      const shift = ch === '_' ? 'sub' : 'sup';
      let text = '';
      if (chars[i + 1] === '{') {
        let j = i + 2;
        let depth = 1;
        for (; j < chars.length; j++) {
          if (chars[j] === '{') depth++;
          else if (chars[j] === '}' && --depth === 0) break;
          text += chars[j];
        }
        i = j;
      } else {
        text = chars[i + 1];
        i++;
      }
      flush();
      if (text) runs.push({ text, shift });
      continue;
    }
    buf += ch;
  }
  flush();
  return runs;
}
