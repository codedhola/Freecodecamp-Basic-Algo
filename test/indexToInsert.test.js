const indexToInsert = require("../src/indexToInsert");

describe("indexToInsert", () => {
  it("should return the lowest index to insert a value into a sorted array", () => {
    const arr = [1, 2, 3, 4];
    const value = 1.5;
    const result = indexToInsert(arr, value);
    expect(result).toBe(1);
  });

  it("should return the index to insert a value into a sorted array", () => {
    const arr = [20, 3, 5];
    const value = 19;
    const result = indexToInsert(arr, value);
    expect(result).toBe(2);
  });

  it("should return 0 when inserting a value into an empty array", () => {
    const arr = [];
    const value = 5;
    const result = indexToInsert(arr, value);
    expect(result).toBe(0);
  });

  it("should return the last index when inserting a value greater than all elements", () => {
    const arr = [1, 2, 3];
    const value = 4;
    const result = indexToInsert(arr, value);
    expect(result).toBe(3);
  });

  it("should return the index to insert a value into a sorted array with negative numbers", () => {
    const arr = [-10, -5, 0, 10];
    const value = 1;
    const result = indexToInsert(arr, value);
    expect(result).toBe(3);
  });
});
