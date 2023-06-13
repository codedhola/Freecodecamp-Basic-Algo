const addTogether = require("../src/argumentOptional");

describe("addTogether", () => {
  it("should return the sum of two valid arguments", () => {
    const result = addTogether(2, 3);
    expect(result).toBe(5);
  });

  it("should return a function if only one argument is provided", () => {
    const result = addTogether(2);
    expect(typeof result).toBe("function");
  });

  it("should return the sum when the returned function is called with a single argument", () => {
    const sumTwoAnd = addTogether(2);
    const result = sumTwoAnd(3);
    expect(result).toBe(5);
  });

  it("should return undefined if either argument is not a valid number", () => {
    const result = addTogether("2", 3);
    expect(result).toBeUndefined();
  });
});
