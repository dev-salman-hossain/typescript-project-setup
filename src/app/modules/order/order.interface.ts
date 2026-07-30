export interface TOrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface TOrder {
  userId: string;
  totalPrice: number;
  items: TOrderItem[];
}
