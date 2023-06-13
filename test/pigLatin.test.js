// Import the function to be tested
const translatePigLatin = require("../src/pigLatin"); // Replace 'yourFile' with the actual file name or module path

// Describe the test suite
describe("translatePigLatin", () => {
  // Test case: Translate word beginning with a consonant
  it("should translate a word beginning with a consonant", () => {
    const word = "pig";
    const result = translatePigLatin(word);
    expect(result).toBe("igpay");
  });

  // Test case: Translate word beginning with a vowel
  it("should translate a word beginning with a vowel", () => {
    const word = "eat";
    const result = translatePigLatin(word);
    expect(result).toBe("eatway");
  });

  // Test case: Translate word beginning with a consonant cluster
  it("should translate a word beginning with a consonant cluster", () => {
    const word = "glove";
    const result = translatePigLatin(word);
    expect(result).toBe("oveglay");
  });

  // Test case: Translate word with a single character
  it("should translate a word with a single character", () => {
    const word = "a";
    const result = translatePigLatin(word);
    expect(result).toBe("away");
  });

  // Test case: Translate empty string to an empty string
  it("should translate an empty string to an empty string", () => {
    const word = "";
    const result = translatePigLatin(word);
    expect(result).toBe("");
  });
});
