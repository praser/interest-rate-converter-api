import MonthTaxCalculator from "../../models/MonthTaxCalculator";

let monthTaxCalculator!: MonthTaxCalculator;

beforeAll(() => {
  monthTaxCalculator = new MonthTaxCalculator("0.5");
});

describe("given a 0.5% tax per month", () => {
  it("is expected to return 6.16% per year", () => {
    const expected: number = 6.167781186449761;
    const received: number = monthTaxCalculator.perYear() * 100;
    expect(received).toBe(expected);
  });

  it("is expected to return 0.5% per month", () => {
    const expected: number = 0.5;
    const received: number = monthTaxCalculator.perMonth() * 100;
    expect(received).toBe(expected);
  });

  it("is epected to return 0.01% per day", () => {
    const expected: number = 0.016626520422846625;
    const received: number = monthTaxCalculator.perDay() * 100;
    expect(received).toBe(expected);
  });
});
