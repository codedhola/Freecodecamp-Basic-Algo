const truncateString = require("../src/truncateString");

describe("truncateString", () => {
  // Test case: Truncate a string longer than the given maximum length with "..." ending
  it('should truncate a string longer than the given maximum length with "..." ending', () => {
    const result = truncateString("Hello, world!", 10);
    expect(result).toBe("Hello, wor...");
  });

  it("should not truncate a string equal to the given maximum length", () => {
    const result = truncateString("Hello, world!", 13);
    expect(result).toBe("Hello, world!");
  });

  it("should return an empty string when the input string is empty", () => {
    const result = truncateString("", 5);
    expect(result).toBe("");
  });

  it("should return the original string when it is shorter than the given maximum length", () => {
    const result = truncateString("Hello", 10);
    expect(result).toBe("Hello");
  });
});
