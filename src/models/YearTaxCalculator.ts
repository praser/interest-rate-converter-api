import * as dotenv from 'dotenv';
import TaxCalculatorInterface from "./TaxCalculatorInterface";

dotenv.config();

class YearTaxCalculator implements TaxCalculatorInterface {
    private tax: number = 0;
    private monthsInYear: number = parseInt(`${process.env.MONTHS_IN_YEAR}`);
    private daysInYear: number = parseInt(`${process.env.DAYS_IN_YEAR}`);
    
    constructor(tax: number) {
        this.tax = tax;
    }

    perYear(): number {
        return this.tax;
    }
    
    perMonth(): number {
        return (1 + this.tax) ^ (1 / this.monthsInYear) -1;
    }
    perDay(): number {
        return (1 + this.tax) ^ (1 / this.daysInYear) -1;
    }
}

export default YearTaxCalculator;