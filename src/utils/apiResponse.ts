import { Response } from "express";

interface ApiResponseOptions {
  res: Response;
  statusCode: number;
  success: boolean;
  message: string;
  data?: unknown;
  meta?: unknown;
}

// Standardized API response sender
export const sendResponse = ({
  res,
  statusCode,
  success,
  message,
  data,
  meta,
}: ApiResponseOptions): void => {
  res.status(statusCode).json({
    success,
    message,
    meta: meta || null,
    data: data || null,
  });
};