import DayTaxCalculator from "../../models/DayTaxCalculator";
import ParamsUtil from "../../utils/ParamsUtil";

let taxStr!: string;
let tax!: number;
let dayTaxCalculator!: DayTaxCalculator;

beforeAll(() => {
  process.env.DAYS_IN_MONTH = '30';
  process.env.DAYS_IN_YEAR = '360'
  process.env.MONTHS_IN_YEAR = '12'
  
  taxStr = '0.5';
  tax = ParamsUtil.parseTax(taxStr);
  dayTaxCalculator = new DayTaxCalculator(taxStr);
})

test('5% converted per year is 502.25%', () => {
  const result = 5.022575212262888;
  expect(dayTaxCalculator.perYear()).toBe(result);
})

test('5% converted per month is 16.14%', () => {
  const result = 0.16140008289534058;
  expect(dayTaxCalculator.perMonth()).toBe(result);
})

test('5% converted per day is 5%', () => {
  expect(dayTaxCalculator.perDay()).toBe(tax);
})