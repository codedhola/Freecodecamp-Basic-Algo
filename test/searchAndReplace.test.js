const myReplace = require("../src/searchAndReplace");

describe("myReplace", () => {
  it("should replace a word with the same case", () => {
    const sentence = "He is reading a book.";
    const before = "book";
    const after = "dog";
    const result = myReplace(sentence, before, after);
    expect(result).toBe("He is reading a dog.");
  });

  it("should replace a word and preserve the case of the first character", () => {
    const sentence = "I have an Apple.";
    const before = "Apple";
    const after = "banana";
    const result = myReplace(sentence, before, after);
    expect(result).toBe("I have an Banana.");
  });

  it("should replace multiple occurrences of a word", () => {
    const sentence = "She sells seashells by the seashore.";
    const before = "seashells";
    const after = "pearls";
    const result = myReplace(sentence, before, after);
    expect(result).toBe("She sells pearls by the seashore.");
  });

  it("should return an empty string when the sentence is empty", () => {
    const sentence = "";
    const before = "word";
    const after = "replacement";
    const result = myReplace(sentence, before, after);
    expect(result).toBe("");
  });
});
