const destroyer = require("../src/destroyer");

describe("Destroyer", () => {
  it("should remove elements from the initial array based on provided arguments", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = destroyer(arr, 2, 4);
    expect(result).toEqual([1, 3, 5]);
  });

  it("should remove elements from the initial array based on multiple provided arguments", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const result = destroyer(arr, 2, 4, 6);
    expect(result).toEqual([1, 3, 5]);
  });

  it("should remove elements from the initial array based on arguments with different data types", () => {
    const arr = [1, "hello", true, "world", 5];
    const result = destroyer(arr, "hello", true);
    expect(result).toEqual([1, "world", 5]);
  });

  it("should remove all elements when all arguments are provided", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = destroyer(arr, 1, 2, 3, 4, 5);
    expect(result).toEqual([]);
  });

  it("should not remove any elements when no arguments are provided", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = destroyer(arr);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
