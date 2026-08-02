// Product module constants
export const PRODUCT_SEARCHABLE_FIELDS = [
  "name",
  "description",
  "category",
  "brand",
] as const;

export const PRODUCT_SORTABLE_FIELDS = [
  "createdAt",
  "updatedAt",
  "price",
  "name",
  "stock",
] as const;

export const DEFAULT_PRODUCT_LIMIT = 12;
export const MAX_PRODUCT_LIMIT = 100;

export type ProductSortableField = (typeof PRODUCT_SORTABLE_FIELDS)[number];