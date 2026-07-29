import { z } from "zod";

export const createProductValidationSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters"),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters"),

  price: z.number().positive("Price must be positive"),

  stock: z.number().int().nonnegative(),

  image: z.string().optional()
});

export const updateProductValidationSchema = z.object({
  title: z.string().optional(),

  description: z.string().optional(),

  price: z.number().optional(),

  stock: z.number().optional(),

  image: z.string().optional()
});
