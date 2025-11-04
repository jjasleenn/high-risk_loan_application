import { AppError } from "./appError";
import { HTTP_STATUS } from "../constants/httpstatuscodes";

export class ForbiddenError extends AppError {
  constructor(message = "Forbidden Access") {
    super(message, HTTP_STATUS.FORBIDDEN);
  }
}
