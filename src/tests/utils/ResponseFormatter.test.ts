import ResponseFormatter from "../../utils/ResponseFormatter";
import YearTaxCalculator from "../../models/YearTaxCalculator";

let obj!: object;

beforeAll(() => {
  obj = ResponseFormatter.json(new YearTaxCalculator('0.05'));
})

test('[ResponseFormatter.json()] has perYear property', () => {
  expect(obj).toHaveProperty('perYear');
})

test('[ResponseFormatter.json()] has perMonth property', () => {
  expect(obj).toHaveProperty('perMonth');
})

test('[ResponseFormatter.json()] has perDay property', () => {
  expect(obj).toHaveProperty('perDay');
})