export const ORDER_STATUS = {
  PENDING: 'pending',
  ACCEPTED: 'accepted',
  CANCELLED: 'cancelled'
} as const;

export type TOrderStatus = typeof ORDER_STATUS[keyof typeof ORDER_STATUS];
