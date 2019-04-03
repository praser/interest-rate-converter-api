import TaxCalculatorInterface from "../models/InterfaceTaxCalculator";

abstract class HttpResponseUtil {
  public static json(taxCalculator: TaxCalculatorInterface): object {
    const obj = {
      perDay: taxCalculator.perDay(),
      perMonth: taxCalculator.perMonth(),
      perYear: taxCalculator.perYear()
    };

    return obj;
  }
}

export default HttpResponseUtil;
