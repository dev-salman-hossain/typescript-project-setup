import express from "express";
import validateRequest from "../../middleware/validateSchema.js";
import { HotelControllers } from "./hotel.controller.js";
import { HotelValidation } from "./hotel.validation.js";

const router = express.Router();

router.post(
  "/",
  validateRequest(HotelValidation.createHotelValidationSchema),
  HotelControllers.createHotel
);

router.get("/", HotelControllers.getAllHotels);

export const HotelRoutes = router;
