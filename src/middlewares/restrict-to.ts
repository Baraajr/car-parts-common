import { NextFunction, Request, Response } from 'express';
import { ForbiddenError } from '../errors/forbidden-error';

const restrictTo =
  (...roles: string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    // roles is an array ['admin']
    if (!roles.includes(req.currentUser!.role)) {
      throw new ForbiddenError(); // forbidden
    }

    next();
  };

export { restrictTo };
