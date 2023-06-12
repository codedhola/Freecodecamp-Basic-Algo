const confirmEnding = require("../src/confirmEnd");

describe("Conform Ending Algorithm", () => {
  it("Confirm the ending of ", () => {
    expect(confirmEnding("Bastian", "n")).toBe(true);
  });

  it("Confirm the ending of ", () => {
    expect(confirmEnding("Connor", "n")).not.toBe(true);
  });

  it("Confirm the ending of ", () => {
    expect(
      confirmEnding(
        "Walking on water and developing software from a specification are easy if both are frozen",
        "specification"
      )
    ).toBe(false);
  });

  it("Check data-type ", () => {
    expect(confirmEnding(true, 2)).toBe(
      "Both parameter needs to accept a valid string type"
    );
  });
});
