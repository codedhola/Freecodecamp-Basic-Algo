const whatIsInAName = require("../src/whereArtThou");

describe("whatIsInAName", () => {
  it("should filter objects based on matching name and value pairs", () => {
    const collection = [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ];
    const source = { last: "Capulet" };
    const result = whatIsInAName(collection, source);
    expect(result).toEqual([{ first: "Tybalt", last: "Capulet" }]);
  });

  it("should filter objects based on multiple name and value pairs", () => {
    const collection = [
      { name: "John", age: 25, city: "New York" },
      { name: "Alice", age: 30, city: "London" },
      { name: "Bob", age: 20, city: "Paris" },
    ];
    const source = { age: 30, city: "London" };
    const result = whatIsInAName(collection, source);
    expect(result).toEqual([{ name: "Alice", age: 30, city: "London" }]);
  });

  it("should return an empty array when the collection is empty", () => {
    const collection = [];
    const source = { name: "John", age: 25 };
    const result = whatIsInAName(collection, source);
    expect(result).toEqual([]);
  });

  it("should return the original collection when the source object is empty", () => {
    const collection = [
      { name: "John", age: 25 },
      { name: "Alice", age: 30 },
      { name: "Bob", age: 20 },
    ];
    const source = {};
    const result = whatIsInAName(collection, source);
    expect(result).toEqual(collection);
  });
});
