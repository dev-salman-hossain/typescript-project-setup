// Room module constants
export const ROOM_TYPES = [
  "SINGLE",
  "DOUBLE",
  "TWIN",
  "SUITE",
  "DELUXE",
  "PRESIDENTIAL",
] as const;

export type RoomType = (typeof ROOM_TYPES)[number];

export const ROOM_STATUS = {
  AVAILABLE: "AVAILABLE",
  BOOKED: "BOOKED",
  MAINTENANCE: "MAINTENANCE",
} as const;

export type RoomStatus = (typeof ROOM_STATUS)[keyof typeof ROOM_STATUS];

export const ROOM_SORTABLE_FIELDS = ["pricePerNight", "capacity", "createdAt"] as const;