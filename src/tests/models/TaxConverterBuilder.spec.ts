import DayTaxConverter from "../../models/DayTaxConverter";
import ITaxConverter from "../../models/ITaxConverter";
import MonthTaxConverter from "../../models/MonthTaxConverter";
import TaxConverterBuilder from "../../models/TaxConverterBuilder";
import YearTaxConverter from "../../models/YearTaxConverter";

let iTaxConverter: ITaxConverter;
const req: { baseUrl: string; tax: string } = { baseUrl: "", tax: "" };

beforeAll(() => {
  req.tax = "20";
});

describe("when req.baseUrl is /per-day", () => {
  beforeAll(() => {
    req.baseUrl = "/per-day";
  });

  it("is expect to return an instance of DayTaxConverter", () => {
    iTaxConverter = TaxConverterBuilder.createInstance(req.baseUrl, req.tax);
    expect(iTaxConverter).toBeInstanceOf(DayTaxConverter);
  });
});

describe("when req.baseUrl is /per-month", () => {
  beforeAll(() => {
    req.baseUrl = "/per-month";
  });

  it("is expect to return an instance of MonthTaxConverter", () => {
    iTaxConverter = TaxConverterBuilder.createInstance(req.baseUrl, req.tax);
    expect(iTaxConverter).toBeInstanceOf(MonthTaxConverter);
  });
});

describe("when req.baseUrl is /per-year", () => {
  beforeAll(() => {
    req.baseUrl = "/per-year";
  });

  it("is expect to return an instance of YearTaxConverter", () => {
    iTaxConverter = TaxConverterBuilder.createInstance(req.baseUrl, req.tax);
    expect(iTaxConverter).toBeInstanceOf(YearTaxConverter);
  });
});
