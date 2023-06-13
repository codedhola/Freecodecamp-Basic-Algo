const fearNotLetter = require("../src/missingLetter");
describe("fearNotLetter", () => {
  it("should find the missing letter in the given letter range", () => {
    const letterRange = "abde";
    const result = fearNotLetter(letterRange);
    expect(result).toBe("c");
  });

  it("should return undefined when no letter is missing in the given letter range", () => {
    const letterRange = "abcdef";
    const result = fearNotLetter(letterRange);
    expect(result).toBeUndefined();
  });

  it("should return undefined for an empty string", () => {
    const letterRange = "";
    const result = fearNotLetter(letterRange);
    expect(result).toBeUndefined();
  });
});
