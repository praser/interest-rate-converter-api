import IRateConverter from "./IRateConverter";

abstract class RateConverter implements IRateConverter {
  protected rate!: number;

  constructor(rate: string) {
    this.rate = this.parseRate(rate);
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

  private parseRate(rate: string): number {
    const parsedRate = parseFloat(rate) / 100;
    if (isNaN(parsedRate)) {
      throw new Error("Interest rate must be a number");
    }
    return parsedRate;
  }
}

export default RateConverter;
