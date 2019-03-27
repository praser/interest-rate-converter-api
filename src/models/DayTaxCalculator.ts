import * as dotenv from 'dotenv';
import TaxCalculatorInterface from "./TaxCalculatorInterface";

dotenv.config();

class DayTaxCalculator implements TaxCalculatorInterface {
    private tax: number = 0;
    private daysInMonth: number = parseInt(`${process.env.DAYS_IN_MONTH}`);
    private daysInYear: number = parseInt(`${process.env.DAYS_IN_YEAR}`);
    
    constructor(tax: number) {
        this.tax = tax;
    }

    perYear(): number {
        return (1 + this.tax) ^ this.daysInYear - 1;
    }
    
    perMonth(): number {
        return (1 + this.tax) ^ this.daysInMonth - 1;
    }

    perDay(): number {
        return this.tax;
    }
}

export default DayTaxCalculator;