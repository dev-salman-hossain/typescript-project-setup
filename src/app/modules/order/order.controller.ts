import catchAsync from '../../../utils/catchAsync.js';
import { orderService } from './order.service.js';
import sendResponse from '../../../utils/sendResponse.js';
import httpStatus from 'http-status';
import { Request, Response } from 'express';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const result = await orderService.createOrder(user.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Order created successfully',
    data: result
  });
});

const getUserOrders = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const result = await orderService.getOrdersByUserId(user.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User orders retrieved successfully',
    data: result
  });
});

export const orderController = {
  createOrder,
  getUserOrders
};
