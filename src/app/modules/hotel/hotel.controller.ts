import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { HotelServices } from "./hotel.service.js";

const createHotel = catchAsync(async (req, res) => {
  const result = await HotelServices.createHotelIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Hotel created successfully",
    data: result,
  });
});

const getAllHotels = catchAsync(async (req, res) => {
  const result = await HotelServices.getAllHotelsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Hotels retrieved successfully",
    data: result,
  });
});

export const HotelControllers = {
  createHotel,
  getAllHotels,
};
