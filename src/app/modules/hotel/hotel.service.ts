// Service to handle Hotel CRUD operations
import { IHotel } from "./hotel.interface.js";

const createHotelIntoDB = async (payload: IHotel) => {
  return {
    id: "hotel_" + Math.random().toString(36).substr(2, 9),
    ...payload,
  };
};

const getAllHotelsFromDB = async () => {
  return [];
};

export const HotelServices = {
  createHotelIntoDB,
  getAllHotelsFromDB,
};
