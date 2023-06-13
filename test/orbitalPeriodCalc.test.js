const orbitalPeriod = require("../src/orbitalPeriodCalc");

describe("orbitalPeriod", () => {
  it("should calculate the orbital period for a single object", () => {
    const arr = [{ name: "ISS", avgAlt: 413.6 }];
    const result = orbitalPeriod(arr);
    expect(result).toEqual([{ name: "ISS", orbitalPeriod: 5557 }]);
  });

  it("should calculate the orbital periods for multiple objects", () => {
    const arr = [
      { name: "ISS", avgAlt: 413.6 },
      { name: "Hubble", avgAlt: 556.7 },
      { name: "Moon", avgAlt: 378632.553 },
    ];
    const result = orbitalPeriod(arr);
    expect(result).toEqual([
      { name: "ISS", orbitalPeriod: 5557 },
      { name: "Hubble", orbitalPeriod: 5734 },
      { name: "Moon", orbitalPeriod: 2377399 },
    ]);
  });
});
