const sumAll = require("../src/sumAll");

describe("Sum Values in an Array", () => {
  test("Sum all Array within arguments", () => {
    const args = [1, 4];
    expect(sumAll(args)).toBe(10);
  });

  test("Sum all Array within arguments", () => {
    const args = [5, 10];
    expect(sumAll(args)).toBe(45);
  });

  test("Check for data type", () => {
    const args = [5, 10];
    expect(typeof sumAll(args)).toBe("number");
  });

  test("Sum all Array within arguments", () => {
    const args = "";
    expect(sumAll(args)).toBe("");
  });
});
