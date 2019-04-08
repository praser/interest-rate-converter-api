import RateConverterBuilder from "../../models/RateConverterBuilder";

describe("When an invalid interst rate is received", () => {
  const req = {
    baseUrl: "/per-year",
    rate: "invalid-value",
  };

  it("is expected to throw an error", () => {
    expect(() => {
      RateConverterBuilder.createInstance(req.baseUrl, req.rate);
    }).toThrowError();
  });
});
