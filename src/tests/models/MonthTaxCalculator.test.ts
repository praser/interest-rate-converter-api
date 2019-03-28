import MonthTaxCalculator from "../../models/MonthTaxCalculator";

let tax!: string;
let monthTaxCalculator!: MonthTaxCalculator;

beforeAll(() => {
  process.env.DAYS_IN_MONTH = '30';
  process.env.DAYS_IN_YEAR = '252'
  process.env.MONTHS_IN_YEAR = '12'
  
  tax = '0.05';
  monthTaxCalculator = new MonthTaxCalculator(tax);
})

test('5% converted per year is 79.58%', () => {
  const result = 0.7958563260221292;
  expect(monthTaxCalculator.perYear()).toBe(result);
})

test('5% converted per month is 5%', () => {
  expect(monthTaxCalculator.perMonth()).toBe(parseFloat(tax));
})

test('5% converted per day is 0.16%', () => {
  const result = 0.0016276620118331753;
  expect(monthTaxCalculator.perDay()).toBe(result);
})