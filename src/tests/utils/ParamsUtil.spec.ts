import ParamsUtil from "../../utils/ParamsUtil";

describe("#parseTax", () => {
  it("is expect to return 0.005 when param is 0.5", () => {
    const expected: number = 0.005;
    const received: number = ParamsUtil.parseTax("0.5");
    expect(received).toBe(expected);
  });
});
