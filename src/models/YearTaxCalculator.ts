import config from "../config";
import ParamsUtil from "../utils/ParamsUtil";
import TaxCalculatorInterface from "./InterfaceTaxCalculator";

class YearTaxCalculator implements TaxCalculatorInterface {
  private tax: number = 0;
  private monthsInYear: number = parseInt(
    process.env.MONTHS_IN_YEAR || config.monthsInYear,
    config.radix
  );
  private daysInYear: number = parseInt(
    process.env.DAYS_IN_YEAR || config.daysInYear,
    config.radix
  );

  constructor(tax: string) {
    this.tax = ParamsUtil.parseTax(tax);
  }

  public perYear(): number {
    return this.tax;
  }

  public perMonth(): number {
    return Math.pow(1 + this.tax, 1 / this.monthsInYear) - 1;
  }

  public perDay(): number {
    return Math.pow(1 + this.tax, 1 / this.daysInYear) - 1;
  }
}

export default YearTaxCalculator;
