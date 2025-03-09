import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('Mengembalikan hasil penjumlahan dengan benar', () => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(10, 20), 30);
});

test('Menghandle angka negatif dengan mengembalikan 0', () => {
  assert.strictEqual(sum(-2, 3), 0);
  assert.strictEqual(sum(5, -1), 0);
  assert.strictEqual(sum(-4, -6), 0);
});

test('Menghandle input bukan angka dengan mengembalikan 0', () => {
  assert.strictEqual(sum("2", 3), 0);
  assert.strictEqual(sum(5, "10"), 0);
  assert.strictEqual(sum("a", "b"), 0);
  assert.strictEqual(sum({}, []), 0);
});

test('Menghandle input 0 dengan benar', () => {
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
  assert.strictEqual(sum(0, 0), 0);
});
