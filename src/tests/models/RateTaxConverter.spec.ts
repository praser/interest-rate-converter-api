import YearRateConverter from "../../models/YearRateConverter";

let yearRateConverter!: YearRateConverter;

beforeAll(() => {
  yearRateConverter = new YearRateConverter("0.5");
});

describe("given 0.5% interest rate per year", () => {
  it("is expected to return 0.5% per year", () => {
    const expected: number = 0.5;
    const received: number = yearRateConverter.perYear() * 100;
    expect(received).toBe(expected);
  });

  it("is expected to return 0.041% per month", () => {
    const expected: number = 0.04157148447290204;
    const received: number = yearRateConverter.perMonth() * 100;
    expect(received).toBe(expected);
  });

  it("is expected to return 0.001% per day", () => {
    const expected: number = 0.0013854377946209695;
    const received: number = yearRateConverter.perDay() * 100;
    expect(received).toBe(expected);
  });

  it("is expected to return a valid Object", () => {
    const result: {
      perDay: number;
      perMonth: number;
      perYear: number;
    } = yearRateConverter.serialize();

    expect(result).toMatchObject({
      perDay: yearRateConverter.perDay(),
      perMonth: yearRateConverter.perMonth(),
      perYear: yearRateConverter.perYear(),
    });
  });
});
