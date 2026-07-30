import { z } from 'zod';

export const createOrderValidationSchema = z.object({
  body: z.object({
    items: z.array(
      z.object({
        productId: z.string(),
        quantity: z.number().int().positive(),
        price: z.number().positive()
      })
    ),
    totalPrice: z.number().positive()
  })
});

export const updateOrderStatusValidationSchema = z.object({
  body: z.object({
    status: z.enum(['pending', 'accepted', 'cancelled'])
  })
});
