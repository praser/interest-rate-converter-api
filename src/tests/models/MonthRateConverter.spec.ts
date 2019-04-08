import MonthRateConverter from "../../models/MonthRateConverter";

let monthRateConverter!: MonthRateConverter;

beforeAll(() => {
  monthRateConverter = new MonthRateConverter("0.5");
});

describe("given a 0.5% interest rate per month", () => {
  it("is expected to return 6.16% per year", () => {
    const expected: number = 6.167781186449761;
    const received: number = monthRateConverter.perYear() * 100;
    expect(received).toBe(expected);
  });

  it("is expected to return 0.5% per month", () => {
    const expected: number = 0.5;
    const received: number = monthRateConverter.perMonth() * 100;
    expect(received).toBe(expected);
  });

  it("is epected to return 0.01% per day", () => {
    const expected: number = 0.016626520422846625;
    const received: number = monthRateConverter.perDay() * 100;
    expect(received).toBe(expected);
  });

  it("is expected to return a valid Object", () => {
    const result: {
      perDay: number;
      perMonth: number;
      perYear: number;
    } = monthRateConverter.serialize();

    expect(result).toMatchObject({
      perDay: monthRateConverter.perDay(),
      perMonth: monthRateConverter.perMonth(),
      perYear: monthRateConverter.perYear(),
    });
  });
});
