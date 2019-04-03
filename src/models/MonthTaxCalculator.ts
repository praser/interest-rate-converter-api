import config from "../config";
import ParamsUtil from "../utils/ParamsUtil";
import TaxCalculatorInterface from "./InterfaceTaxCalculator";

class MonthTaxCalculator implements TaxCalculatorInterface {
  private tax: number = 0;
  private monthsInYear: number = parseInt(
    process.env.MONTHS_IN_YEAR || config.monthsInYear,
    config.radix
  );
  private daysInMonth: number = parseInt(
    process.env.DAYS_IN_MONTH || config.daysInMonth,
    config.radix
  );

  constructor(tax: string) {
    this.tax = ParamsUtil.parseTax(tax);
  }

  public perYear(): number {
    return Math.pow(1 + this.tax, this.monthsInYear) - 1;
  }

  public perMonth(): number {
    return this.tax;
  }
  public perDay(): number {
    return Math.pow(1 + this.tax, 1 / this.daysInMonth) - 1;
  }
}

export default MonthTaxCalculator;
