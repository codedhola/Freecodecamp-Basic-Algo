const findLongestWordLength = require("../src/longestWordLength");

describe("Find Longest word length in a string", () => {
  it("Return the Longest word length in the string", () => {
    expect(
      findLongestWordLength("The quick brown fox jumped over the lazy dog")
    ).toBe(6);
  });

  it("Return the Longest word length in the string", () => {
    expect(
      findLongestWordLength(
        "What is the average airspeed velocity of an unladen swallow"
      )
    ).toBe(8);
  });

  it("Check for value data type", () => {
    expect(
      typeof findLongestWordLength(
        "The quick brown fox jumped over the lazy dog"
      )
    ).toBe("number");
  });

  it("return Invalid for other data types", () => {
    expect(findLongestWordLength(true)).toBe("Please Input a valid string");
  });
});
