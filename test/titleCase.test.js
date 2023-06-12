// Import the function to be tested
const titleCase = require("../src/titleCase"); // Replace 'yourFile' with the actual file name or module path

// Describe the test suite
describe("titleCase", () => {
  // Test case: Capitalize the first letter of each word
  it("should capitalize the first letter of each word", () => {
    const result = titleCase("the quick brown fox");
    expect(result).toBe("The Quick Brown Fox");
  });

  // Test case: Capitalize connecting words like "the" and "of"
  it('should capitalize connecting words like "the" and "of"', () => {
    const result = titleCase("the lord of the rings");
    expect(result).toBe("The Lord Of The Rings");
  });

  // Test case: Capitalize the first letter of a single word
  it("should capitalize the first letter of a single word", () => {
    const result = titleCase("javascript");
    expect(result).toBe("Javascript");
  });

  // Test case: Capitalize the first letter of each word in an empty string
  it("should return an empty string when the input is empty", () => {
    const result = titleCase("");
    expect(result).toBe("");
  });
});
