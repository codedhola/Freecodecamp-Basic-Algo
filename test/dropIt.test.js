const dropElements = require("../src/dropIt");

describe("dropElements", () => {
  it("should remove elements until the condition is satisfied", () => {
    const arr = [1, 2, 3, 4];
    const func = (num) => num >= 3;
    const result = dropElements(arr, func);
    expect(result).toEqual([3, 4]);
  });

  it("should return an empty array when the condition is never satisfied", () => {
    const arr = [1, 2, 3, 4];
    const func = (num) => num > 5;
    const result = dropElements(arr, func);
    expect(result).toEqual([]);
  });

  it("should remove elements until the condition is satisfied, even with non-numeric elements", () => {
    const arr = ["a", "b", "c", "d", "e"];
    const func = (letter) => letter === "c";
    const result = dropElements(arr, func);
    expect(result).toEqual(["c", "d", "e"]);
  });

  it("should return the whole array when the condition is satisfied with the first element", () => {
    const arr = [1, 2, 3, 4];
    const func = (num) => num === 1;
    const result = dropElements(arr, func);
    expect(result).toEqual([1, 2, 3, 4]);
  });
});
