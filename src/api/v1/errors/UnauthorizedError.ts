import { AppError } from "./appError";
import { HTTP_STATUS } from "../constants/httpstatuscodes";

export class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized Access") {
    super(message, HTTP_STATUS.UNAUTHORIZED);
  }
}
