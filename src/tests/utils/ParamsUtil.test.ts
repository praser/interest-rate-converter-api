import ParamsUtil from "../../utils/ParamsUtil";

test('ParamsUtil.parseTax returns 0.005 when param is 0.5', () => {
    const param: string = '0.5';
    expect(ParamsUtil.parseTax(param)).toBe(0.005);
});