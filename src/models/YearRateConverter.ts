import config from "../config";
import RateConverter from "./RateConverter";

class YearRateConverter extends RateConverter {
  private monthsInYear: number = parseInt(
    process.env.MONTHS_IN_YEAR || config.monthsInYear,
    config.radix,
  );

  private daysInYear: number = parseInt(
    process.env.DAYS_IN_YEAR || config.daysInYear,
    config.radix,
  );

  constructor(rate: string) {
    super(rate);
  }

  public perYear(): number {
    return this.rate;
  }

  public perMonth(): number {
    return Math.pow(1 + this.rate, 1 / this.monthsInYear) - 1;
  }

  public perDay(): number {
    return Math.pow(1 + this.rate, 1 / this.daysInYear) - 1;
  }
}

export default YearRateConverter;
