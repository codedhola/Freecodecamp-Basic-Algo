const frankenSplice = require("../src/frankenSplice");

describe("frankenSplice", () => {
  it("should copy elements from the first array to the second array at the specified index", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const index = 1;
    const result = frankenSplice(arr1, arr2, index);
    expect(result).toEqual([4, 1, 2, 3, 5, 6]);
    expect(arr1).toEqual([1, 2, 3]);
    expect(arr2).toEqual([4, 5, 6]);
  });

  it("should copy elements from the first array to an empty second array at the specified index", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [];
    const index = 0;
    const result = frankenSplice(arr1, arr2, index);
    expect(result).toEqual([1, 2, 3]);
    expect(arr1).toEqual([1, 2, 3]);
    expect(arr2).toEqual([]);
  });

  it("should return the second array unchanged when the first array is empty", () => {
    const arr1 = [];
    const arr2 = [4, 5, 6];
    const index = 2;
    const result = frankenSplice(arr1, arr2, index);
    expect(result).toEqual([4, 5, 6]);
    expect(arr1).toEqual([]);
    expect(arr2).toEqual([4, 5, 6]);
  });
});
