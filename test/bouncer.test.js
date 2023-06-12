const bouncer = require("../src/bouncer");

describe("Falsy value Remover", () => {
  it("Remove falsy values in array", () => {
    expect(bouncer([7, "ate", "", false, 9])).toEqual([7, "ate", 9]);
  });

  it("Remove falsy values in array", () => {
    expect(bouncer([false, null, 0, NaN, undefined, ""])).toEqual([]);
  });

  it("Check if it An Array Data type", () => {
    expect(
      Array.isArray(bouncer([false, null, 0, NaN, undefined, ""]))
    ).toEqual(true);
  });

  it("Check if it An Array Data type", () => {
    expect(Array.isArray(bouncer("Developer"))).toEqual(false);
  });
});
