import DayTaxConverter from "./DayTaxConverter";
import ITaxConverter from "./ITaxConverter";
import MonthTaxConverter from "./MonthTaxConverter";
import YearTaxConverter from "./YearTaxConverter";

abstract class TaxConverterBuilder {
  public static createInstance(baseUri: string, tax: string): ITaxConverter {
    let iTaxConverter!: ITaxConverter;
    switch (baseUri) {
      case "/per-year":
        iTaxConverter = new YearTaxConverter(tax);
        break;
      case "/per-month":
        iTaxConverter = new MonthTaxConverter(tax);
        break;
      case "/per-day":
        iTaxConverter = new DayTaxConverter(tax);
        break;
    }

    return iTaxConverter;
  }
}

export default TaxConverterBuilder;
