const factorial = require("../src/factorial");

describe("Factorialise A Number", () => {
  it("Factorialise the given number given", () => {
    expect(factorial(5)).toBe(120);
  });

  it("Check the return of it's data type", () => {
    expect(typeof factorial(5)).toBe("number");
  });

  it("Factorialise the given number given", () => {
    expect(factorial(20)).toBe(2432902008176640000);
  });

  it("Factorialise the given number given", () => {
    expect(factorial(0)).toBe(1);
  });

  it("Factorialise the given number given", () => {
    expect(factorial("hello")).toBe("Input a valid number");
  });
});
