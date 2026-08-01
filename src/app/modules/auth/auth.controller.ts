// Cleaned and validated controllers
import { Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../../../utils/sendResponse.js";
import { AuthService } from "./auth.service.js";
import catchAsync from "../../../utils/catchAsync.js";

// user register
const registerUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.registerUser(req.body);

  // res.status(201).json(result);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "register successful",
    data: result,
  });
});

// user login
const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.loginUser(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Login Successful",
    data: result,
  });
});

// user veryfy
const OtpVerify = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.OtpVerify(req.body);
  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Verify Successful",
    result,
  });
});

export const AuthController = {
  loginUser,
  registerUser,
  OtpVerify,
};
