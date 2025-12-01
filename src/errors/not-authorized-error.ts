import { CustomError } from './custom-error';
export class NotAuthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    super('You are not logged in');

    // Only because we are extending a built-in class
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: 'Not authorized',
      },
    ];
  }
}
