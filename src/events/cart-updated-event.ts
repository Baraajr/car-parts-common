import { Subjects } from './subjects';

interface CartItemData {
  id: string;
  product: string;
  quantity: number;
  price: number;
  productName?: string;
  productImg?: string;
}

export interface CartUpdatedEvent {
  subject: Subjects.cartUpdated;
  data: {
    id: string;
    userId: string;
    cartItems: CartItemData[];
    totalCartPrice: number;
    totalPriceAfterDiscount?: number;
  };
}
