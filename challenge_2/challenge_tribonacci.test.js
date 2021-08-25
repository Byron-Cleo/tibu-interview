const tribonacci = require("./challenge_tribonacci");

describe("", () => {});
test("Input => [0, 0, 1], Number(9)", () => {
  expect(tribonacci([0, 0, 1], Number(9))).toStrictEqual([
    0, 0, 1, 1, 2, 4, 7, 13, 24,
  ]);
});

test("Input => [1, 2, 3], Number(5)", () => {
  expect(tribonacci([1, 2, 3], Number(5))).toStrictEqual([1, 2, 3, 6, 11]);
});

test("Input => [1, 1, 1], Number(10)", () => {
  expect(tribonacci([1, 1, 1], Number(10))).toStrictEqual([
    1, 1, 1, 3, 5, 9, 17, 31, 57, 105,
  ]);
});

test("Input => [0, 0, 1], Number(10)", () => {
  expect(tribonacci([0, 0, 1], Number(10))).toStrictEqual([
    0, 0, 1, 1, 2, 4, 7, 13, 24, 44,
  ]);
});

test("Input => [0, 1, 1], Number(10)", () => {
  expect(tribonacci([0, 1, 1], Number(10))).toStrictEqual([
    0, 1, 1, 2, 4, 7, 13, 24, 44, 81,
  ]);
});
