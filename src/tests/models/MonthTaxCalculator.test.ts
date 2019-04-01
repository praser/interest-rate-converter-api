import MonthTaxCalculator from "../../models/MonthTaxCalculator";
import ParamsUtil from "../../utils/ParamsUtil";

let taxStr!: string;
let tax!: number;
let monthTaxCalculator!: MonthTaxCalculator;

beforeAll(() => {
  process.env.DAYS_IN_MONTH = '30';
  process.env.DAYS_IN_YEAR = '360'
  process.env.MONTHS_IN_YEAR = '12'
  
  taxStr = '0.5';
  tax = ParamsUtil.parseTax(taxStr);

  monthTaxCalculator = new MonthTaxCalculator(taxStr);
})

test('5% converted per year is 6.16%', () => {
  const result = 0.06167781186449761;
  expect(monthTaxCalculator.perYear()).toBe(result);
})

test('5% converted per month is 5%', () => {
  expect(monthTaxCalculator.perMonth()).toBe(tax);
})

test('5% converted per day is 0.01%', () => {
  const result = 0.00016626520422846625;
  expect(monthTaxCalculator.perDay()).toBe(result);
})