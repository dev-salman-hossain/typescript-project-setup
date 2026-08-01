import express from "express";
import validateRequest from "../../middleware/validateSchema.js";
import { RoomControllers } from "./room.controller.js";
import { RoomValidation } from "./room.validation.js";

const router = express.Router();

router.post(
  "/",
  validateRequest(RoomValidation.createRoomValidationSchema),
  RoomControllers.createRoom
);

router.get("/", RoomControllers.getRooms);

export const RoomRoutes = router;
