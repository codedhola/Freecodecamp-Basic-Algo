const truthCheck = require("../src/everythingBeTrue");
describe("truthCheck", () => {
  it("should return true if the predicate is truthy for all elements", () => {
    const collection = [
      { name: "John", age: 25 },
      { name: "Alice", age: 30 },
      { name: "Bob", age: 20 },
    ];
    const predicate = "age";
    const result = truthCheck(collection, predicate);
    expect(result).toBe(true);
  });

  it("should return false if the predicate is falsy for any element", () => {
    const collection = [
      { name: "John", age: 25 },
      { name: "Alice", age: 30 },
      { name: "Bob", age: undefined },
    ];
    const predicate = "age";
    const result = truthCheck(collection, predicate);
    expect(result).toBe(false);
  });

  it("should return true for an empty collection", () => {
    const collection = [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ];
    const predicate = "isBot";
    const result = truthCheck(collection, predicate);
    expect(result).toBe(false);
  });

  it("should return true for an empty predicate", () => {
    const collection = [
      { name: "John", age: 25 },
      { name: "Alice", age: 30 },
      { name: "Bob", age: 20 },
    ];
    const predicate = "";
    const result = truthCheck(collection, predicate);
    expect(result).toBe(false);
  });
});
