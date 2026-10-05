// Unit tests for the pure helpers (calculator, LaTeX utilities). Run with `npm test`.
import assert from 'node:assert/strict';
import { evaluate, formatResult } from '../src/utils/calculator.js';
import { renderMath, sanitizeLatexString, unitToLatex, tokenizeInline, collectMath } from '../src/utils/latex.js';

const tests = [];
const test = (name, fn) => tests.push({ name, fn });
const close = (actual, expected, eps = 1e-9) => assert.ok(Math.abs(actual - expected) < eps, `${actual} ≉ ${expected}`);

// ── Calculator ──
test('operator precedence', () => assert.equal(evaluate('2+3×4'), 14));
test('power is right-associative', () => assert.equal(evaluate('2^3^2'), 512));
test('unary minus binds looser than ^', () => assert.equal(evaluate('-3^2'), -9));
test('negative exponent', () => assert.equal(evaluate('2^-3'), 0.125));
test('subtraction of a negative', () => assert.equal(evaluate('5--2'), 7));
test('DEG trig with an expression argument', () => close(evaluate('sin(30+60)', 'DEG'), 1));
test('RAD trig', () => close(evaluate('cos(π)', 'RAD'), -1));
test('implicit multiplication', () => close(evaluate('2π'), 2 * Math.PI));
test('constant e is not an exponent', () => close(evaluate('2e3'), 2 * Math.E * 3));
test('signed exponent from a previous result', () => close(evaluate('1e-7×2'), 2e-7));
test('square root', () => assert.equal(evaluate('√(81)'), 9));
test('missing closing parenthesis is tolerated', () => assert.equal(evaluate('(2+3'), 5));
test('division by zero is an error', () => assert.throws(() => evaluate('1÷0')));
test('garbage is an error', () => assert.throws(() => evaluate('2+')));
test('formatResult removes float noise', () => assert.equal(formatResult(evaluate('sin(30)', 'DEG')), '0.5'));
test('formatResult keeps tiny values readable', () => assert.equal(formatResult(1e-7), '1e-7'));

// ── LaTeX helpers ──
test('sanitize repairs an eaten \\frac', () => assert.equal(sanitizeLatexString('\x0Crac{a}{b}'), '\\frac{a}{b}'));
test('sanitize keeps \\Phi (Eurocode 3 notation)', () => assert.equal(sanitizeLatexString('\\Phi'), '\\Phi'));
test('sanitize keeps math accents it cannot map', () => assert.equal(sanitizeLatexString('\\hat{\\sigma}'), '\\hat{\\sigma}'));
test('renderMath renders valid LaTeX', () => assert.ok(renderMath('\\frac{a}{b}').html.includes('katex')));
test('renderMath reports invalid LaTeX instead of throwing', () => assert.ok(renderMath('\\frac{a}{').error));
test('\\euro macro renders', () => assert.ok(renderMath('10 \\euro').html));
test('plain units are wrapped in \\text', () => assert.equal(unitToLatex('kN·m'), '\\text{kN·m}'));
test('LaTeX units are kept', () => assert.equal(unitToLatex('\\text{m}^2'), '\\text{m}^2'));
test('percent unit is escaped and renders', () => {
  assert.equal(unitToLatex('%'), '\\text{\\%}');
  assert.ok(renderMath(unitToLatex('%')).html);
});
test('tokenizer finds math inside bold', () => {
  const [bold] = tokenizeInline('**effort $N_{Ed}$**');
  assert.equal(bold.kind, 'bold');
  assert.deepEqual(bold.children.find(t => t.kind === 'math'), { kind: 'math', value: 'N_{Ed}' });
});
test('multiplication with spaces is not italic', () => {
  assert.ok(tokenizeInline('a * b * c').every(t => t.kind === 'text'));
});
test('collectMath finds block and inline math', () => {
  const found = collectMath('Texte $a$\n$$b = c$$\nfin');
  assert.deepEqual(found.map(f => [f.latex, f.display]), [['b = c', true], ['a', false]].sort((x, y) => (x[1] === y[1] ? 0 : x[1] ? 1 : -1)));
});

let failed = 0;
for (const { name, fn } of tests) {
  try { fn(); console.log(`  ✓ ${name}`); } catch (e) { failed++; console.log(`  ✗ ${name}\n      ${e.message}`); }
}
console.log(`\n${tests.length - failed}/${tests.length} unit tests passed.`);
process.exitCode = failed ? 1 : 0;
