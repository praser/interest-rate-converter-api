import TaxCalculatorInterface from "../models/TaxCalculatorInterface";

abstract class ResponseFormatter {
    public static json(taxCalculator: TaxCalculatorInterface): object {
        const obj = {
            perYear: taxCalculator.perYear(),
            perMonth: taxCalculator.perMonth(),
            perDay: taxCalculator.perDay()
        }

        return obj;
    }
}

export default ResponseFormatter;