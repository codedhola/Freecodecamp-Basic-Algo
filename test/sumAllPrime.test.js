const sumPrimes = require("../src/sumAllPrime");
describe("sumPrimes", () => {
  it("should calculate the sum of prime numbers less than or equal to the given number", () => {
    const inputNum = 10;
    const result = sumPrimes(inputNum);
    expect(result).toBe(17);
  });

  it("should return 0 when the given number is less than 2", () => {
    const inputNum = 1;
    const result = sumPrimes(inputNum);
    expect(result).toBe(0);
  });

  it("should calculate the sum of prime numbers when the given number is a prime number itself", () => {
    const inputNum = 13;
    const result = sumPrimes(inputNum);
    expect(result).toBe(41);
  });

  it("should calculate the sum of prime numbers when the given number is a large number", () => {
    const inputNum = 100;
    const result = sumPrimes(inputNum);
    expect(result).toBe(1060);
  });
});
