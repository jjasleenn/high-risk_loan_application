import { BadRequestError } from "../src/api/v1/errors/badrequestError";
import { NotFoundError } from "../src/api/v1/errors/notfoundError";
import { UnauthorizedError } from "../src/api/v1/errors/UnauthorizedError";

test("BadRequestError should set correct status", () => {
  const err = new BadRequestError("Invalid input");
  expect(err.statusCode).toBe(400);
});

test("NotFoundError should set correct status", () => {
  const err = new NotFoundError("Not found");
  expect(err.statusCode).toBe(404);
});

test("UnauthorizedError should set correct status", () => {
  const err = new UnauthorizedError();
  expect(err.statusCode).toBe(401);
});
