const smallestCommons = require("../src/smallestCommonMultiples");

describe("smallestCommons", () => {
  it("should find the smallest common multiple of two numbers", () => {
    const result = smallestCommons([1, 3]);
    expect(result).toBe(6);
  });

  it("should find the smallest common multiple when the numbers are in reverse order", () => {
    const result = smallestCommons([5, 2]);
    expect(result).toBe(60);
  });

  it("should find the smallest common multiple when the numbers are the same", () => {
    const result = smallestCommons([4, 4]);
    expect(result).toBe(4);
  });

  it("should find the smallest common multiple when the range is large", () => {
    const result = smallestCommons([1, 10]);
    expect(result).toBe(2520);
  });
});
