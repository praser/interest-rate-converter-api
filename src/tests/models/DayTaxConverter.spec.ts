import DayTaxConverter from "../../models/DayTaxConverter";

let dayTaxConverter!: DayTaxConverter;

beforeAll(() => {
  dayTaxConverter = new DayTaxConverter("0.5");
});

describe("given a 0.5% tax per day", () => {
  it("is expected do return 502.15% per year", () => {
    const expected: number = 502.2575212262888;
    const received: number = dayTaxConverter.perYear() * 100;
    expect(received).toBe(expected);
  });

  it("is expected to return 16.14% per month", () => {
    const expected: number = 16.14000828953406;
    const received: number = dayTaxConverter.perMonth() * 100;
    expect(received).toBe(expected);
  });

  it("is expected to return 0.5% per day", () => {
    const expected: number = 0.5;
    const received: number = dayTaxConverter.perDay() * 100;
    expect(received).toBe(expected);
  });

  it("is expected to return a valid Object", () => {
    const result: {
      perDay: number;
      perMonth: number;
      perYear: number;
    } = dayTaxConverter.serialize();

    expect(result).toMatchObject({
      perDay: dayTaxConverter.perDay(),
      perMonth: dayTaxConverter.perMonth(),
      perYear: dayTaxConverter.perYear()
    });
  });
});
