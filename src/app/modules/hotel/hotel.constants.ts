// Hotel module constants
export const HOTEL_SEARCHABLE_FIELDS = [
  "name",
  "location",
  "description",
  "category",
] as const;

export const HOTEL_SORTABLE_FIELDS = [
  "createdAt",
  "updatedAt",
  "name",
  "pricePerNight",
  "rating",
] as const;

export const DEFAULT_HOTEL_LIMIT = 10;
export const MAX_HOTEL_LIMIT = 50;

export type HotelSortableField = (typeof HOTEL_SORTABLE_FIELDS)[number];