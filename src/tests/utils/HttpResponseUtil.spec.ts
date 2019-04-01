import YearTaxCalculator from "../../models/YearTaxCalculator";
import ResponseFormatter from "../../utils/HttpResponseUtil";

let obj!: object;

beforeAll(() => {
  obj = ResponseFormatter.json(new YearTaxCalculator("0.05"));
});

describe("A valid response body", () => {
  it("is expect do have the perYear property", () => {
    expect(obj).toHaveProperty("perYear");
  });

  it("is expected to have the perMonth property", () => {
    expect(obj).toHaveProperty("perMonth");
  });

  it("is expected to have the perDay property", () => {
    expect(obj).toHaveProperty("perDay");
  });
});
