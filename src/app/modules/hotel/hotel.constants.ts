// Hotel module constants
export const HOTEL_SEARCHABLE_FIELDS = [
  "name",
  "location",
  "description",
  "category",
  "amenities",
] as const;

export const HOTEL_SORTABLE_FIELDS = [
  "createdAt",
  "updatedAt",
  "name",
  "pricePerNight",
  "rating",
  "totalRooms",
] as const;

export const DEFAULT_HOTEL_LIMIT = 10;
export const MAX_HOTEL_LIMIT = 50;
export const MAX_IMAGE_UPLOAD_COUNT = 5;

export type HotelSortableField = (typeof HOTEL_SORTABLE_FIELDS)[number];
export type HotelSearchableField = (typeof HOTEL_SEARCHABLE_FIELDS)[number];