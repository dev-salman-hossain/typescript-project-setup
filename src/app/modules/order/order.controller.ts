import { Request, Response } from 'express';
import catchAsync from '../../../utils/catchAsync.js';
import { orderService } from './order.service.js';
import sendResponse from '../../../utils/sendResponse.js';
import httpStatus from 'http-status';

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

export const orderController = {
  createOrder
};
