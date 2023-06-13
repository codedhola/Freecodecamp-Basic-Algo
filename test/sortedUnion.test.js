const uniteUnique = require("../src/sortedUnion");

describe("uniteUnique", () => {
  it("should return a new array with unique values from multiple input arrays", () => {
    const inputArrays = [
      [1, 2],
      [3, 4],
      [5, 6, 7],
    ];
    const result = uniteUnique(...inputArrays);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it("should return a new array with unique values in the order of the original provided arrays", () => {
    const inputArrays = [
      [4, 3, 2, 1],
      [5, 4, 3],
      [1, 2, 6],
    ];
    const result = uniteUnique(...inputArrays);
    expect(result).toEqual([4, 3, 2, 1, 5, 6]);
  });

  it("should return an empty array when all input arrays are empty", () => {
    const inputArrays = [[], [], []];
    const result = uniteUnique(...inputArrays);
    expect(result).toEqual([]);
  });

  it("should return a new array with unique values even if duplicates exist in the input arrays", () => {
    const inputArrays = [
      [1, 2, 2],
      [2, 3, 4],
      [4, 5, 5],
    ];
    const result = uniteUnique(...inputArrays);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
