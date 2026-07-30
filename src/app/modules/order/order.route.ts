import express from 'express';
import auth from '../../middleware/auth.js';
import validateSchema from '../../middleware/validateSchema.js';
import {
  createOrderValidationSchema,
  updateOrderStatusValidationSchema
} from './order.validation.js';
import { orderController } from './order.controller.js';

const router = express.Router();

router.post(
  '/',
  auth('user', 'customer'),
  validateSchema(createOrderValidationSchema),
  orderController.createOrder
);

router.get(
  '/my-orders',
  auth('user', 'customer'),
  orderController.getUserOrders
);

router.get(
  '/:orderId',
  auth('user', 'customer', 'admin'),
  orderController.getSingleOrder
);

router.patch(
  '/:orderId/status',
  auth('admin'),
  validateSchema(updateOrderStatusValidationSchema),
  orderController.updateOrderStatus
);

export const OrderRoutes = router;
