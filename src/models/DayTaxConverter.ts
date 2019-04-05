import config from "../config";
import TaxConverter from "./TaxConverter";

class DayTaxConverter extends TaxConverter {
  private daysInMonth: number = parseInt(
    process.env.DAYS_IN_MONTH || config.daysInMonth,
    config.radix,
  );

  private daysInYear: number = parseInt(
    process.env.DAYS_IN_YEAR || config.daysInYear,
    config.radix,
  );

  constructor(tax: string) {
    super(tax);
  }

  public perYear(): number {
    return Math.pow(1 + this.tax, this.daysInYear) - 1;
  }

  public perMonth(): number {
    return Math.pow(1 + this.tax, this.daysInMonth) - 1;
  }

  public perDay(): number {
    return this.tax;
  }
}

export default DayTaxConverter;
