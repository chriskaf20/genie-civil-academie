// Expression evaluator for the scientific calculator (no eval / Function).
// Grammar: expr := term (('+'|'-') term)* ; term := unary (('×'|'÷'|implicit) unary)* ;
//          unary := ('-'|'+') unary | power ; power := primary ('^' unary)? ;
//          primary := number | 'π' | 'e' | func '(' expr ')' | '(' expr ')'

const FUNCTIONS = ['sin', 'cos', 'tan', '√'];

function tokenize(input) {
  const src = String(input).replace(/\s+/g, '').replace(/\*/g, '×').replace(/\//g, '÷');
  const tokens = [];
  let i = 0;
  while (i < src.length) {
    const rest = src.slice(i);
    // Exponent form needs a sign (1e-7, 2.5e+21) so that "2e3" still reads as 2·e·3.
    const num = rest.match(/^(\d+\.?\d*|\.\d+)(e[+-]\d+)?/);
    if (num) {
      tokens.push({ type: 'num', value: parseFloat(num[0]) });
      i += num[0].length;
      continue;
    }
    const fn = FUNCTIONS.find(f => rest.startsWith(f));
    if (fn) { tokens.push({ type: 'fn', value: fn }); i += fn.length; continue; }
    const ch = src[i];
    if (ch === 'π') tokens.push({ type: 'num', value: Math.PI });
    else if (ch === 'e') tokens.push({ type: 'num', value: Math.E });
    else if ('+-×÷^()'.includes(ch)) tokens.push({ type: 'op', value: ch });
    else throw new Error(`Caractère inattendu « ${ch} »`);
    i += 1;
  }
  return tokens;
}

export function evaluate(input, mode = 'DEG') {
  const tokens = tokenize(input);
  let pos = 0;
  const peek = () => tokens[pos];
  const take = () => tokens[pos++];
  const isOp = (t, v) => t && t.type === 'op' && t.value === v;

  const startsPrimary = t => t && (t.type === 'num' || t.type === 'fn' || isOp(t, '('));

  function expr() {
    let value = term();
    while (isOp(peek(), '+') || isOp(peek(), '-')) {
      const op = take().value;
      const right = term();
      value = op === '+' ? value + right : value - right;
    }
    return value;
  }

  function term() {
    let value = unary();
    for (;;) {
      if (isOp(peek(), '×')) { take(); value *= unary(); }
      else if (isOp(peek(), '÷')) { take(); value /= unary(); }
      else if (startsPrimary(peek())) value *= unary(); // 2π, 3(4+1), 2sin(30)
      else return value;
    }
  }

  // Unary minus binds looser than ^ : -3^2 = -(3^2) = -9, and 2^-3 is allowed.
  function unary() {
    if (isOp(peek(), '-')) { take(); return -unary(); }
    if (isOp(peek(), '+')) { take(); return unary(); }
    return power();
  }

  function power() {
    const base = primary();
    if (isOp(peek(), '^')) { take(); return base ** unary(); }
    return base;
  }

  function primary() {
    const t = take();
    if (!t) throw new Error('Expression incomplète');
    if (t.type === 'num') return t.value;
    if (isOp(t, '(')) {
      const value = expr();
      if (isOp(peek(), ')')) take(); // a missing final ")" is tolerated
      return value;
    }
    if (t.type === 'fn') {
      const hasParen = isOp(peek(), '(');
      if (hasParen) take();
      const arg = hasParen ? expr() : unary();
      if (hasParen && isOp(peek(), ')')) take();
      const angle = mode === 'DEG' ? (arg * Math.PI) / 180 : arg;
      switch (t.value) {
        case 'sin': return Math.sin(angle);
        case 'cos': return Math.cos(angle);
        case 'tan': return Math.tan(angle);
        case '√':
          if (arg < 0) throw new Error('Racine d\'un nombre négatif');
          return Math.sqrt(arg);
        default: break;
      }
    }
    throw new Error('Expression invalide');
  }

  if (!tokens.length) return 0;
  const result = expr();
  if (pos < tokens.length) throw new Error('Expression invalide');
  if (!Number.isFinite(result)) throw new Error('Résultat non défini');
  return result;
}

/** Rounds away floating-point noise (sin(30°) → 0.5) and keeps plain notation when reasonable. */
export function formatResult(value) {
  const rounded = Number(value.toPrecision(12));
  if (Object.is(rounded, -0)) return '0';
  const abs = Math.abs(rounded);
  if (abs !== 0 && (abs < 1e-6 || abs >= 1e15)) return rounded.toExponential(8).replace(/\.?0+e/, 'e');
  return String(rounded);
}
