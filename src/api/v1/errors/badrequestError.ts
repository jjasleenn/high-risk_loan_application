import { AppError } from "./appError";
import { HTTP_STATUS } from "../constants/httpstatuscodes";

export class BadRequestError extends AppError {
  constructor(message = "Bad Request") {
    super(message, HTTP_STATUS.BAD_REQUEST);
  }
}
