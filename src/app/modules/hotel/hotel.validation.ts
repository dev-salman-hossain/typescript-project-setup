import { z } from "zod";

const createHotelValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Hotel name is required" }),
    location: z.string({ required_error: "Location is required" }),
    description: z.string().optional(),
    rating: z.number().min(1).max(5).optional(),
    contactNumber: z.string({ required_error: "Contact number is required" }),
    email: z.string({ required_error: "Email is required" }).email("Invalid email format"),
  }),
});

export const HotelValidation = {
  createHotelValidationSchema,
};
// Validation schema added
