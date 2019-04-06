import YearTaxConverter from "../../models/YearTaxConverter";

let yearTaxConverter!: YearTaxConverter;

beforeAll(() => {
  yearTaxConverter = new YearTaxConverter("0.5");
});

describe("given 0.5% tax per year", () => {
  it("is expected to return 0.5% per year", () => {
    const expected: number = 0.5;
    const received: number = yearTaxConverter.perYear() * 100;
    expect(received).toBe(expected);
  });

  it("is expected to return 0.041% per month", () => {
    const expected: number = 0.04157148447290204;
    const received: number = yearTaxConverter.perMonth() * 100;
    expect(received).toBe(expected);
  });

  it("is expected to return 0.001% per day", () => {
    const expected: number = 0.0013854377946209695;
    const received: number = yearTaxConverter.perDay() * 100;
    expect(received).toBe(expected);
  });

  it("is expected to return a valid Object", () => {
    const result: {
      perDay: number;
      perMonth: number;
      perYear: number;
    } = yearTaxConverter.serialize();

    expect(result).toMatchObject({
      perDay: yearTaxConverter.perDay(),
      perMonth: yearTaxConverter.perMonth(),
      perYear: yearTaxConverter.perYear()
    });
  });
});
