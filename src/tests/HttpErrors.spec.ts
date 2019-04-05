import HttpErrors from "../HttpErrors";

it(" is expected to have a not found http error representation", () => {
  expect(HttpErrors.NOT_FOUND().code).toBe(404);
  expect(HttpErrors.NOT_FOUND().description).toBeDefined();
  expect(HttpErrors.NOT_FOUND().description).not.toBe("");
});

it(" is expected to have a bad request http error representation", () => {
  expect(HttpErrors.BAD_REQUEST().code).toBe(400);
  expect(HttpErrors.BAD_REQUEST().description).toBeDefined();
  expect(HttpErrors.BAD_REQUEST().description).not.toBe("");
});

it("is expect to throw an error when instanciated", () => {
  expect(() => {
    // tslint:disable-next-line: no-unused-expression
    new HttpErrors();
  }).toThrowError();
});
