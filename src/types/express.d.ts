import { JwtPayload } from "jsonwebtoken";

// Extend Express Request type to include authenticated user payload
declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload & {
        id: string;
        email: string;
        role: string;
        iat?: number;
        exp?: number;
      };
    }
  }
}

export {};