const convertHTML = require("../src/htmlEntities");

describe("convertHTML", () => {
  it("should convert characters to their corresponding HTML entities", () => {
    const inputString = 'Hello, "world" & <friends>';
    const result = convertHTML(inputString);
    expect(result).toBe("Hello, &quot;world&quot; &amp; &lt;friends&gt;");
  });

  it("should return the same string when no characters need to be converted", () => {
    const inputString = "Hello, world!";
    const result = convertHTML(inputString);
    expect(result).toBe("Hello, world!");
  });

  it("should convert multiple instances of characters to their corresponding HTML entities", () => {
    const inputString = 'I love "coding" & coding is <fun>';
    const result = convertHTML(inputString);
    expect(result).toBe(
      "I love &quot;coding&quot; &amp; coding is &lt;fun&gt;"
    );
  });

  it("should convert characters in different positions of the string", () => {
    const inputString = 'I "like" to code & have <fun>';
    const result = convertHTML(inputString);
    expect(result).toBe("I &quot;like&quot; to code &amp; have &lt;fun&gt;");
  });
});
