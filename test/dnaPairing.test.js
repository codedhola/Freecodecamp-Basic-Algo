const pairElement = require("../src/dnaPairing");

describe("pairElement", () => {
  it("should match the missing base pairs for a DNA strand", () => {
    const dnaStrand = "GCG";
    const result = pairElement(dnaStrand);
    expect(result).toEqual([
      ["G", "C"],
      ["C", "G"],
      ["G", "C"],
    ]);
  });

  it("should return an empty array when the DNA strand is empty", () => {
    const dnaStrand = "";
    const result = pairElement(dnaStrand);
    expect(result).toEqual([]);
  });

  it("should match the missing base pairs for a DNA strand with multiple characters", () => {
    const dnaStrand = "ATCGTA";
    const result = pairElement(dnaStrand);
    expect(result).toEqual(
      expect.arrayContaining([
        ["A", "T"],
        ["T", "A"],
        ["C", "G"],
        ["G", "C"],
        ["T", "A"],
      ])
    );
  });

  it("should ignore unknown characters and match the missing base pairs", () => {
    const dnaStrand = "ATGX";
    const result = pairElement(dnaStrand);
    expect(result).toEqual(
      expect.arrayContaining([
        ["A", "T"],
        ["T", "A"],
        ["G", "C"],
      ])
    );
  });
});
