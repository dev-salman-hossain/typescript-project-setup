import express from 'express';
import auth from '../../middleware/auth.js';
import validateSchema from '../../middleware/validateSchema.js';
import { createOrderValidationSchema } from './order.validation.js';
import { orderController } from './order.controller.js';

const router = express.Router();

router.post(
  '/',
  auth('user', 'customer'),
  validateSchema(createOrderValidationSchema),
  orderController.createOrder
);

export const OrderRoutes = router;
