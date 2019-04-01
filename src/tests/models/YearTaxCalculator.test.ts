import * as dotenv from 'dotenv'
import YearTaxCalculator from "../../models/YearTaxCalculator";
import ParamsUtil from '../../utils/ParamsUtil';

dotenv.config();

let taxStr!: string;
let tax!: number;
let yearTaxCalculator!: YearTaxCalculator;

beforeAll(() => {
  process.env.DAYS_IN_MONTH = '30';
  process.env.DAYS_IN_YEAR = '252'
  process.env.MONTHS_IN_YEAR = '12'

  taxStr = '12.4';
  tax = ParamsUtil.parseTax(taxStr);
  yearTaxCalculator = new YearTaxCalculator(taxStr);
})

test('12.4% converted per year is 12.4%', () => {
  expect(yearTaxCalculator.perYear()).toBe(tax);
})

test('12.4% converted per month is 0.97%', () => {
  const result = 0.009788745350229444;
  expect(yearTaxCalculator.perMonth()).toBe(result);
})

test('12.4% converted per day is 0.04%', () => {
  const result = 0.00046397169472611743;
  expect(yearTaxCalculator.perDay()).toBe(result);
})