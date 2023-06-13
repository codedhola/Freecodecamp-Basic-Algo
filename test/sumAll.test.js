const sumAll = require("../src/sumAll");

test("Sum all Array within arguments", () => {
  const args = [1, 4];
  expect(sumAll(args)).toBe(10);
});
