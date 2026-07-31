import { z } from "zod";

const createRoomValidationSchema = z.object({
  body: z.object({
    hotelId: z.string({ required_error: "Hotel ID is required" }),
    roomNumber: z.string({ required_error: "Room number is required" }),
    type: z.enum(["SINGLE", "DOUBLE", "SUITE"], { required_error: "Room type is required" }),
    pricePerNight: z.number({ required_error: "Price is required" }).positive(),
    isAvailable: z.boolean().optional(),
  }),
});

export const RoomValidation = {
  createRoomValidationSchema,
};
// Room validation setup
