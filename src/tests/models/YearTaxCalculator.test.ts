import * as dotenv from 'dotenv'
import YearTaxCalculator from "../../models/YearTaxCalculator";

dotenv.config();

let tax!: string;
let yearTaxCalculator!: YearTaxCalculator;

beforeAll(() => {
  process.env.DAYS_IN_MONTH = '30';
  process.env.DAYS_IN_YEAR = '252'
  process.env.MONTHS_IN_YEAR = '12'

  tax = '0.05';
  yearTaxCalculator = new YearTaxCalculator(tax);
})

test('5% converted per year is 5%', () => {
  expect(yearTaxCalculator.perYear()).toBe(parseFloat(tax));
})

test('5% converted per month is 0.40%', () => {
  const result = 0.0040741237836483535;
  expect(yearTaxCalculator.perMonth()).toBe(result);
})

test('5% converted per day is 0.19%', () => {
  const result = 0.00019363050654397362;
  expect(yearTaxCalculator.perDay()).toBe(result);
})