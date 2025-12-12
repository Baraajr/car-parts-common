import { Subjects } from './subjects';

interface CartItemData {
  id: string;
  product: string;
  quantity: number;
  price: number;
  version: number
  productName?: string;
  productImg?: string;
}

export interface CartUpdatedEvent {
  subject: Subjects.cartUpdated;
  data: {
    id: string;
    userId: string;
    version:number
    cartItems: CartItemData[];
    totalCartPrice: number;
    totalPriceAfterDiscount?: number;
  };
}
