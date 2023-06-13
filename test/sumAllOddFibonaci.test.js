const sumFibs = require("../src/sumAllOddFibonaci");

describe("sumFibs", () => {
  it("should calculate the sum of odd Fibonacci numbers less than or equal to the given number", () => {
    const inputNum = 10;
    const result = sumFibs(inputNum);
    expect(result).toBe(10);
  });

  it("should return 0 when the given number is less than 1", () => {
    const inputNum = 0;
    const result = sumFibs(inputNum);
    expect(result).toBe(0);
  });

  it("should calculate the sum of odd Fibonacci numbers when the given number is a Fibonacci number itself", () => {
    const inputNum = 21;
    const result = sumFibs(inputNum);
    expect(result).toBe(44);
  });

  it("should calculate the sum of odd Fibonacci numbers when the given number is a large number", () => {
    const inputNum = 1000;
    const result = sumFibs(inputNum);
    expect(result).toBe(1785);
  });
});
