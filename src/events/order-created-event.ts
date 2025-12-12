import { Subjects } from './subjects';

interface OrderItem {
  productId: string;
  name: string;
  imageCover: string;
  quantity: number;
  price: number; // price at purchase time
}

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;

  data: {
    id: string;
    userId: string;
    orderItems: OrderItem[];
    orderStatus: string;
    version: number;
    expiresAt: Date;
    price: number;
    idempotencyKey: string;
  };
}
