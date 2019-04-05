import ITaxConverter from "./ITaxConverter";

abstract class TaxConverter implements ITaxConverter {
  protected tax!: number;

  constructor(tax: string) {
    this.tax = this.parseTax(tax);
  }

  public abstract perDay(): number;
  public abstract perMonth(): number;
  public abstract perYear(): number;

  public serialize(): { perDay: number; perMonth: number; perYear: number } {
    return {
      perDay: this.perDay(),
      perMonth: this.perMonth(),
      perYear: this.perYear(),
    };
  }

  private parseTax(tax: string): number {
    return parseFloat(tax) / 100;
  }
}

export default TaxConverter;
