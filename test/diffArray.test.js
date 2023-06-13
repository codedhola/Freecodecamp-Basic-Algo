// Import the function to be tested
const diffArray = require("../src/diffArray"); // Replace 'yourFile' with the actual file name or module path

// Describe the test suite
describe("diffArray", () => {
  // Test case: Arrays with unique elements
  it("should return the symmetric difference of two arrays", () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [2, 4, 6, 8];
    const result = diffArray(arr1, arr2);
    expect(result).toEqual([1, 3, 6, 8]);
  });

  // Test case: Arrays with common elements
  it("should return the symmetric difference of two arrays with common elements", () => {
    const arr1 = ["andesite", "grass", "dirt", "pink wool", "dead shrub"];
    const arr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];
    const result = diffArray(arr1, arr2);
    expect(result).toEqual(expect.arrayContaining(["diorite", "pink wool"]));
  });

  // Test case: Empty arrays should return an empty array
  it("should return an empty array when both arrays are empty", () => {
    const arr1 = [];
    const arr2 = [];
    const result = diffArray(arr1, arr2);
    expect(result).toEqual([]);
  });

  // Test case: One empty array and one non-empty array should return the non-empty array
  it("should return the non-empty array when one array is empty", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [];
    const result = diffArray(arr1, arr2);
    expect(result).toEqual([1, 2, 3]);
  });
});
