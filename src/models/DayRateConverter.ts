import config from "../config";
import RateConverter from "./RateConverter";

class DayRateConverter extends RateConverter {
  private daysInMonth: number = parseInt(
    process.env.DAYS_IN_MONTH || config.daysInMonth,
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
    return Math.pow(1 + this.rate, this.daysInYear) - 1;
  }

  public perMonth(): number {
    return Math.pow(1 + this.rate, this.daysInMonth) - 1;
  }

  public perDay(): number {
    return this.rate;
  }
}

export default DayRateConverter;
