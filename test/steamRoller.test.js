const steamrollArray = require("../src/steamRoller");

describe("steamrollArray", () => {
  it("should flatten a single-level nested array", () => {
    const arr = [1, [2], 3];
    const result = steamrollArray(arr);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should flatten a multi-level nested array", () => {
    const arr = [1, [2, [3, [4]]], 5];
    const result = steamrollArray(arr);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("should flatten an array with various data types", () => {
    const arr = [1, [2, [3, [4, "five"]]], { six: 6 }, [7, ["eight"]]];
    const result = steamrollArray(arr);
    expect(result).toEqual([1, 2, 3, 4, "five", { six: 6 }, 7, "eight"]);
  });

  it("should flatten an empty array", () => {
    const arr = [];
    const result = steamrollArray(arr);
    expect(result).toEqual([]);
  });
});
