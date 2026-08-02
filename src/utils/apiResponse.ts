import { Response } from "express";

interface ApiResponseOptions {
  res: Response;
  statusCode: number;
  success: boolean;
  message: string;
  data?: unknown;
  meta?: unknown;
  token?: string;
}

// Standardized API response sender
export const sendResponse = ({
  res,
  statusCode,
  success,
  message,
  data,
  meta,
  token,
}: ApiResponseOptions): void => {
  res.status(statusCode).json({
    success,
    message,
    token: token || undefined,
    meta: meta || null,
    data: data || null,
  });
};