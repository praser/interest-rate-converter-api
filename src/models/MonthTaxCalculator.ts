import * as dotenv from 'dotenv';
import TaxCalculatorInterface from "./TaxCalculatorInterface";

dotenv.config();

class MonthTaxCalculator implements TaxCalculatorInterface {
    private tax: number = 0;
    private monthsInYear: number = parseInt(`${process.env.MONTHS_IN_YEAR}`);
    
    constructor(tax: number) {
        this.tax = tax;
    }

    perYear(): number {
        return (1 + this.tax) ^ 1 - 1;
    }
    
    perMonth(): number {
        return this.tax;
    }
    perDay(): number {
        return (1 + this.tax) ^ (1 / this.monthsInYear) -1;
    }
}

export default MonthTaxCalculator;