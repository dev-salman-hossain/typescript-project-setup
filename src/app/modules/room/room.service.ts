// Room module service logic
import { IRoom } from "./room.interface.js";

const createRoomIntoDB = async (payload: IRoom) => {
  return {
    id: "room_" + Math.random().toString(36).substr(2, 9),
    ...payload,
  };
};

const getRoomsForHotelFromDB = async (hotelId: string) => {
  return [];
};

export const RoomServices = {
  createRoomIntoDB,
  getRoomsForHotelFromDB,
};
