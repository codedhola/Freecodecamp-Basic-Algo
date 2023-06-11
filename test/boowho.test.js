const booWho = require("./../src/boowho");

describe("Check Boolean Datatype", () => {
  test("Check for true boolean data-type", () => {
    expect(booWho(true)).toBe(true);
  });

  test("Check for false boolean data-type", () => {
    expect(booWho(false)).toBe(true);
  });
});

describe("Check For String | Int Datatype", () => {
  test("Check for string datatype", () => {
    expect(booWho("true")).toBe(false);
  });

  test("Check for string datatype", () => {
    expect(booWho("false")).toBe(false);
  });
});
