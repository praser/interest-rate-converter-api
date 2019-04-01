abstract class ParamsUtil {
    public static parseTax(tax: string): number {
        return  parseFloat(tax) / 100;
    }
}

export default ParamsUtil