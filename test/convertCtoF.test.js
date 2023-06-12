const convertCtoF = require("../src/convertCtoF");

describe("Function to Convert celsius to farenheit", () => {
  it("Should Convert 20deg celsius to 68deg Farenheit", () => {
    expect(convertCtoF(20)).toBe(68);
  });

  it("Should Convert -30 deg celsius to -22 deg Farenheit", () => {
    expect(convertCtoF(-30)).toBe(-22);
  });

  it("Should Convert -30 deg celsius to -22 deg Farenheit", () => {
    expect(typeof convertCtoF(50)).toBe("number");
  });

  it("Should Return an 'invalid input' message", () => {
    expect(convertCtoF("30deg")).toBe("Invalid Input provided");
  });

  it("Should Check for the data type", () => {
    expect(typeof convertCtoF("30deg")).toEqual("string");
  });
});
