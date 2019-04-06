// tslint:disable-next-line: interface-over-type-literal
type HttpError = { code: number; description: string };

class HttpErrors {
  public static NOT_FOUND(): HttpError {
    return this.notFound;
  }

  public static BAD_REQUEST(): HttpError {
    return this.badRequest;
  }

  private static readonly notFound: HttpError = {
    code: 404,
    description: "The API does not respond to resource you are trying to reach",
  };

  private static readonly badRequest: HttpError = {
    code: 400,
    description:
      "We can't go futher with your request. Please check provided params and tray again",
  };

  public constructor() {
    throw new Error("This class cannot be instanciated");
  }
}
export default HttpErrors;
