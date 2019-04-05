interface ITaxCalculator {
  perYear(): number;
  perMonth(): number;
  perDay(): number;
}

export default ITaxCalculator;
