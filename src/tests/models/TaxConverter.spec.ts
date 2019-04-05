import TaxConverterBuilder from "../../models/TaxConverterBuilder";

describe("When an invalid tax is received", () => {
  const req = {
    baseUrl: "/per-year",
    tax: "invalid-value",
  };

  it("is expected to throw an error", () => {
    expect(() => {
      TaxConverterBuilder.createInstance(req.baseUrl, req.tax);
    }).toThrowError();
  });
});
