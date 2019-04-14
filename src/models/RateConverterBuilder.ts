import DayRateConverter from "./DayRateConverter";
import IRateConverter from "./IRateConverter";
import MonthRateConverter from "./MonthRateConverter";
import YearRateConverter from "./YearRateConverter";

abstract class RateConverterBuilder {
  public static createInstance(baseUrl: string, rate: string): IRateConverter {
    let iRateConverter!: IRateConverter;
    switch (true) {
      case baseUrl.endsWith("/per-year"):
        iRateConverter = new YearRateConverter(rate);
        break;
      case baseUrl.endsWith("/per-month"):
        iRateConverter = new MonthRateConverter(rate);
        break;
      case baseUrl.endsWith("/per-day"):
        iRateConverter = new DayRateConverter(rate);
        break;
    }

    return iRateConverter;
  }
}

export default RateConverterBuilder;
