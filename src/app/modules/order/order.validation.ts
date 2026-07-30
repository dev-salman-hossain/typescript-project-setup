import { z } from 'zod';

export const createOrderValidationSchema = z.object({
  body: z.object({
    items: z.array(
      z.object({
        productId: z.string({ required_error: "Product ID is required" }),
        quantity: z.number().int().positive("Quantity must be a positive integer"),
        price: z.number().positive("Price must be a positive number")
      })
    ),
    totalPrice: z.number().positive("Total price must be a positive number")
  })
});

export const updateOrderStatusValidationSchema = z.object({
  body: z.object({
    status: z.enum(['pending', 'accepted', 'cancelled'], {
      required_error: "Status is required and must be pending, accepted, or cancelled"
    })
  })
});
