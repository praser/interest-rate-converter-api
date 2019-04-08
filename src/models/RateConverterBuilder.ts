import DayRateConverter from "./DayRateConverter";
import IRateConverter from "./IRateConverter";
import MonthRateConverter from "./MonthRateConverter";
import YearRateConverter from "./YearRateConverter";

abstract class RateConverterBuilder {
  public static createInstance(baseUri: string, rate: string): IRateConverter {
    let iRateConverter!: IRateConverter;
    switch (baseUri) {
      case "/per-year":
        iRateConverter = new YearRateConverter(rate);
        break;
      case "/per-month":
        iRateConverter = new MonthRateConverter(rate);
        break;
      case "/per-day":
        iRateConverter = new DayRateConverter(rate);
        break;
    }

    return iRateConverter;
  }
}

export default RateConverterBuilder;
