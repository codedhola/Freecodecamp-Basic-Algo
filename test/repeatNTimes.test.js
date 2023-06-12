const repeatStringNumTimes = require("../src/repeatNtimes");

describe("repeatStringNumTimes", () => {
  it('should return the string "abcabcabc" when "abc" is repeated 3 times', () => {
    const result = repeatStringNumTimes("abc", 3);
    expect(result).toBe("abcabcabc");
  });

  it("should return an empty string when the input string is repeated 0 times", () => {
    const result = repeatStringNumTimes("def", 0);
    expect(result).toBe("");
  });

  it('should return the string "xyzxyzxyzxyzxyz" when "xyz" is repeated 5 times', () => {
    const result = repeatStringNumTimes("xyz", 5);
    expect(result).toBe("xyzxyzxyzxyzxyz");
  });

  it("should return an empty string when an empty string is repeated multiple times", () => {
    const result = repeatStringNumTimes("", 10);
    expect(result).toBe("");
  });
});
