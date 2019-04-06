import MonthTaxConverter from "../../models/MonthTaxConverter";

let monthTaxConverter!: MonthTaxConverter;

beforeAll(() => {
  monthTaxConverter = new MonthTaxConverter("0.5");
});

describe("given a 0.5% tax per month", () => {
  it("is expected to return 6.16% per year", () => {
    const expected: number = 6.167781186449761;
    const received: number = monthTaxConverter.perYear() * 100;
    expect(received).toBe(expected);
  });

  it("is expected to return 0.5% per month", () => {
    const expected: number = 0.5;
    const received: number = monthTaxConverter.perMonth() * 100;
    expect(received).toBe(expected);
  });

  it("is epected to return 0.01% per day", () => {
    const expected: number = 0.016626520422846625;
    const received: number = monthTaxConverter.perDay() * 100;
    expect(received).toBe(expected);
  });

  it("is expected to return a valid Object", () => {
    const result: {
      perDay: number;
      perMonth: number;
      perYear: number;
    } = monthTaxConverter.serialize();

    expect(result).toMatchObject({
      perDay: monthTaxConverter.perDay(),
      perMonth: monthTaxConverter.perMonth(),
      perYear: monthTaxConverter.perYear()
    });
  });
});
