export interface IRoom {
  hotelId: string;
  roomNumber: string;
  type: 'SINGLE' | 'DOUBLE' | 'SUITE';
  pricePerNight: number;
  isAvailable: boolean;
}
// Room interface type defined
