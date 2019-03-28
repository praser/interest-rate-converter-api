import DayTaxCalculator from "../../models/DayTaxCalculator";

let tax!: string;
let dayTaxCalculator!: DayTaxCalculator;

beforeAll(() => {
  process.env.DAYS_IN_MONTH = '30';
  process.env.DAYS_IN_YEAR = '252'
  process.env.MONTHS_IN_YEAR = '12'
  
  tax = '0.05';
  dayTaxCalculator = new DayTaxCalculator(tax);
})

test('5% converted per year is 21,862,578.36%', () => {
  const result = 218625.78363222114;
  expect(dayTaxCalculator.perYear()).toBe(result);
})

test('5% converted per month is 332.19%', () => {
  const result = 3.3219423751506625;
  expect(dayTaxCalculator.perMonth()).toBe(result);
})

test('5% converted per day is 5%', () => {
  expect(dayTaxCalculator.perDay()).toBe(parseFloat(tax));
})