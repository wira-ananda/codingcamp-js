import test from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('Mengembalikan hasil penjumlahan dengan benar', () => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(-1, 1), 0);
  assert.strictEqual(sum(0, 0), 0);
});

test('Menghandle angka desimal dengan benar', () => {
  assert.strictEqual(sum(2.5, 2.5), 5);
  assert(Math.abs(sum(0.1, 0.2) - 0.3) < Number.EPSILON);
});
