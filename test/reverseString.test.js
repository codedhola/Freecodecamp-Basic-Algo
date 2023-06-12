const reverseString = require("../src/reverseString");

describe("Reverse A string", () => {
  it("Reverse The given string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("Reverse The given string", () => {
    expect(reverseString("Howdy")).toBe("ydwoH");
  });

  it("Send an Invalid input response", () => {
    expect(reverseString(true)).toBe("Please Input a valid string type");
  });
});
