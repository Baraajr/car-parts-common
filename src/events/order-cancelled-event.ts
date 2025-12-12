import { Subjects } from './subjects';

interface OrderItem {
  productId: string;
  name: string;
  imageCover: string;
  quantity: number;
  price: number; // price at purchase time
}

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;

  data: {
    id: string;
    version: number;
    orderItems: OrderItem[];
  };
}
