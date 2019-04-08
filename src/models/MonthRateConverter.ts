import config from "../config";
import RateConverter from "./RateConverter";

class MonthRateConverter extends RateConverter {
  private monthsInYear: number = parseInt(
    process.env.MONTHS_IN_YEAR || config.monthsInYear,
    config.radix,
  );
  private daysInMonth: number = parseInt(
    process.env.DAYS_IN_MONTH || config.daysInMonth,
    config.radix,
  );

  constructor(rate: string) {
    super(rate);
  }

  public perYear(): number {
    return Math.pow(1 + this.rate, this.monthsInYear) - 1;
  }

  public perMonth(): number {
    return this.rate;
  }

  public perDay(): number {
    return Math.pow(1 + this.rate, 1 / this.daysInMonth) - 1;
  }
}

export default MonthRateConverter;
