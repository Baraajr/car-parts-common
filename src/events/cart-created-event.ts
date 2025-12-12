import { Subjects } from './subjects.js';

export interface CartItemData {
  id: string;
  product: string;
  quantity: number;
  price: number;
  productName?: string;
  productImg?: string;
}

export interface CartCreatedEvent {
  subject: Subjects.cartCreated;
  data: {
    id: string;
    version: number;
    userId: string;
    versio:number
    cartItems: CartItemData[];
    totalCartPrice: number;
    totalPriceAfterDiscount?: number;
  };
}
