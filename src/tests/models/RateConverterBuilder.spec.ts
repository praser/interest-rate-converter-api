import DayRateConverter from "../../models/DayRateConverter";
import IRateConverter from "../../models/IRateConverter";
import MonthRateConverter from "../../models/MonthRateConverter";
import RateConverterBuilder from "../../models/RateConverterBuilder";
import YearRateConverter from "../../models/YearRateConverter";

let iRateConverter: IRateConverter;
const req: { baseUrl: string; rate: string } = { baseUrl: "", rate: "" };

beforeAll(() => {
  req.rate = "20";
});

describe("when req.baseUrl is /per-day", () => {
  beforeAll(() => {
    req.baseUrl = "/per-day";
  });

  it("is expect to return an instance of DayRateConverter", () => {
    iRateConverter = RateConverterBuilder.createInstance(req.baseUrl, req.rate);
    expect(iRateConverter).toBeInstanceOf(DayRateConverter);
  });
});

describe("when req.baseUrl is /per-month", () => {
  beforeAll(() => {
    req.baseUrl = "/per-month";
  });

  it("is expect to return an instance of MonthRateConverter", () => {
    iRateConverter = RateConverterBuilder.createInstance(req.baseUrl, req.rate);
    expect(iRateConverter).toBeInstanceOf(MonthRateConverter);
  });
});

describe("when req.baseUrl is /per-year", () => {
  beforeAll(() => {
    req.baseUrl = "/per-year";
  });

  it("is expect to return an instance of YearRateConverter", () => {
    iRateConverter = RateConverterBuilder.createInstance(req.baseUrl, req.rate);
    expect(iRateConverter).toBeInstanceOf(YearRateConverter);
  });
});
