import ITaxCalculator from "../models/ITaxCalculator";

abstract class HttpResponseUtil {
  public static json(taxCalculator: ITaxCalculator): object {
    const obj = {
      perDay: taxCalculator.perDay(),
      perMonth: taxCalculator.perMonth(),
      perYear: taxCalculator.perYear(),
    };

    return obj;
  }
}

export default HttpResponseUtil;
