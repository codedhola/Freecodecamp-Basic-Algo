const Person = require("../src/makeAPerson");

describe("Person", () => {
  let bob;

  beforeEach(() => {
    bob = new Person("Bob Ross");
  });

  it("should return the first name", () => {
    const result = bob.getFirstName();
    expect(result).toBe("Bob");
  });

  it("should return the last name", () => {
    const result = bob.getLastName();
    expect(result).toBe("Ross");
  });

  it("should return the full name", () => {
    const result = bob.getFullName();
    expect(result).toBe("Bob Ross");
  });

  it("should set the first name and return it", () => {
    const result = bob.setFirstName("John");
    expect(result).toBe("John");
    expect(bob.getFullName()).toBe("John Ross");
  });

  it("should set the last name and return it", () => {
    const result = bob.setLastName("Doe");
    expect(result).toBe("Doe");
    expect(bob.getFullName()).toBe("Bob Doe");
  });

  it("should set the full name and return it", () => {
    const result = bob.setFullName("John Doe");
    expect(result).toBe("John Doe");
    expect(bob.getFullName()).toBe("John Doe");
  });
});
