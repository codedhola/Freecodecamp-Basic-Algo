const findElement = require("../src/findElement");

describe("findElement", () => {
  it("should return the first even number in the array", () => {
    const arr = [1, 3, 5, 4, 7, 9];
    const func = (x) => x % 2 === 0;
    const result = findElement(arr, func);
    expect(result).toBe(4);
  });

  it("should return the first string with length greater than 5", () => {
    const arr = ["apple", "banana", "pear", "kiwi"];
    const func = (x) => x.length > 5;
    const result = findElement(arr, func);
    expect(result).toBe("banana");
  });

  it("should return undefined if no element passes the truth test", () => {
    const arr = [1, 3, 5, 7, 9];
    const func = (x) => x % 2 === 0;
    const result = findElement(arr, func);
    expect(result).toBeUndefined();
  });

  it("should return undefined for an empty array", () => {
    const arr = [];
    const func = (x) => x % 2 === 0;
    const result = findElement(arr, func);
    expect(result).toBeUndefined();
  });
});
