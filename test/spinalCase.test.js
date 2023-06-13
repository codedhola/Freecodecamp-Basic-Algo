const spinalCase = require("../src/spinalCase");

describe("spinalCase", () => {
  it("should convert a string to spinal case", () => {
    const str = "This is Spinal Tap";
    const result = spinalCase(str);
    expect(result).toBe("this-is-spinal-tap");
  });

  it("should convert a string with camel case to spinal case", () => {
    const str = "camelCaseTest";
    const result = spinalCase(str);
    expect(result).toBe("camel-case-test");
  });

  it("should convert a string with underscore separators to spinal case", () => {
    const str = "this_is_an_example";
    const result = spinalCase(str);
    expect(result).toBe("this-is-an-example");
  });

  it("should convert a string with mixed separators to spinal case", () => {
    const str = "Hello_world-Test";
    const result = spinalCase(str);
    expect(result).toBe("hello-world-test");
  });

  it("should convert an empty string to an empty spinal case string", () => {
    const str = "";
    const result = spinalCase(str);
    expect(result).toBe("");
  });
});
