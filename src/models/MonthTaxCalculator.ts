import * as dotenv from 'dotenv';
import TaxCalculatorInterface from "./TaxCalculatorInterface";
import ParamsUtil from '../utils/ParamsUtil';

dotenv.config();

class MonthTaxCalculator implements TaxCalculatorInterface {
    private tax: number = 0;
    private monthsInYear: number = parseInt(`${process.env.MONTHS_IN_YEAR}`);
    private daysInMonth: number = parseInt(`${process.env.DAYS_IN_MONTH}`);
    
    constructor(tax: string) {
        this.tax = ParamsUtil.parseTax(tax);
    }

    perYear(): number {
        return Math.pow(1 + this.tax, this.monthsInYear) - 1;
    }
    
    perMonth(): number {
        return this.tax;
    }
    perDay(): number {
        return Math.pow(1 + this.tax, 1 / this.daysInMonth) -1;
    }
}

export default MonthTaxCalculator;