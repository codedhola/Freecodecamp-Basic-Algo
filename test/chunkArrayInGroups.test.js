const chunkArrayInGroups = require("../src/chunkArrayInGroups");

describe("chunkArrayInGroups", () => {
  it("should split the array into groups of the specified size", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const size = 3;
    const result = chunkArrayInGroups(arr, size);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });

  it("should return an empty array when splitting an empty array", () => {
    const arr = [];
    const size = 2;
    const result = chunkArrayInGroups(arr, size);
    expect(result).toEqual([]);
  });

  it("should split the array into groups of size 1", () => {
    const arr = [1, 2, 3, 4];
    const size = 1;
    const result = chunkArrayInGroups(arr, size);
    expect(result).toEqual([[1], [2], [3], [4]]);
  });

  it("should return the array as a single group when the group size is larger than the array size", () => {
    const arr = [1, 2, 3];
    const size = 5;
    const result = chunkArrayInGroups(arr, size);
    expect(result).toEqual([[1, 2, 3]]);
  });
});
