const binaryAgent = require("../src/binaryAgent");

describe("binaryAgent", () => {
  it("should translate a binary string into an English sentence", () => {
    const binaryString =
      "01001000 01100101 01101100 01101100 01101111 00101100 00100000 01110111 01101111 01110010 01101100 01100100 00100001";
    const result = binaryAgent(binaryString);
    expect(result).toEqual("Hello, world!");
  });

  it("should translate a binary string with special characters", () => {
    const binaryString =
      "01000010 01101001 01101110 01100001 01110010 01111001 00100000 01001101 01100001 01110010 01110011 01101000 01100001 01101100 01101100";
    const result = binaryAgent(binaryString);
    expect(result).toEqual("Binary Marshall");
  });

  it("should translate an empty binary string", () => {
    const binaryString = "";
    const result = binaryAgent(binaryString);
    expect(result).toBe("");
  });
});
