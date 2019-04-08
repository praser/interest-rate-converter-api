interface IRateConverter {
  perYear(): number;
  perMonth(): number;
  perDay(): number;
  serialize(): { perDay: number; perMonth: number; perYear: number };
}

export default IRateConverter;
