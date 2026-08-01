import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { RoomServices } from "./room.service.js";

const createRoom = catchAsync(async (req, res) => {
  const result = await RoomServices.createRoomIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Room created successfully",
    data: result,
  });
});

const getRooms = catchAsync(async (req, res) => {
  const { hotelId } = req.query;
  const result = await RoomServices.getRoomsForHotelFromDB(hotelId as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Rooms fetched successfully",
    data: result,
  });
});

export const RoomControllers = {
  createRoom,
  getRooms,
};
