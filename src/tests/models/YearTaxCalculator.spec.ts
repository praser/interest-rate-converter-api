import YearTaxCalculator from "../../models/YearTaxCalculator";

let yearTaxCalculator!: YearTaxCalculator;

beforeAll(() => {
  yearTaxCalculator = new YearTaxCalculator("0.5");
});

describe("given 0.5% tax per year", () => {
  it("is expected to return 0.5% per year", () => {
    const expected: number = 0.5;
    const received: number = yearTaxCalculator.perYear() * 100;
    expect(received).toBe(expected);
  });

  it("is expected to return 0.041% per month", () => {
    const expected: number = 0.04157148447290204;
    const received: number = yearTaxCalculator.perMonth() * 100;
    expect(received).toBe(expected);
  });

  it("is expected to return 0.001% per day", () => {
    const expected: number = 0.0013854377946209695;
    const received: number = yearTaxCalculator.perDay() * 100;
    expect(received).toBe(expected);
  });
});
