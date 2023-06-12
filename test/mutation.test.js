const mutation = require("../src/mutation");

describe("mutation", () => {
  it("should return true if all letters of the second string are present in the first string", () => {
    const arr = ["hello", "Hello"];
    const result = mutation(arr);
    expect(result).toBe(true);
  });

  it("should return false if not all letters of the second string are present in the first string", () => {
    const arr = ["hello", "hey"];
    const result = mutation(arr);
    expect(result).toBe(false);
  });

  it("should return true if all letters of the second string (ignoring case) are present in the first string", () => {
    const arr = ["Alien", "line"];
    const result = mutation(arr);
    expect(result).toBe(true);
  });

  it("should return true for empty strings", () => {
    const arr = ["", ""];
    const result = mutation(arr);
    expect(result).toBe(true);
  });

  it("should return false if the first string is empty", () => {
    const arr = ["", "abc"];
    const result = mutation(arr);
    expect(result).toBe(false);
  });
});
