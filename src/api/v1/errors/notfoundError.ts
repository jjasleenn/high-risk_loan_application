import { AppError } from "./appError";
import { HTTP_STATUS } from "../constants/httpstatuscodes";

export class NotFoundError extends AppError {
  constructor(message = "Resource Not Found") {
    super(message, HTTP_STATUS.NOT_FOUND);
  }
}
