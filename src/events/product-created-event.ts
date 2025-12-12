import { Subjects } from './subjects';

// to make sure the class consistent subject and data related to that subject
export interface ProductCreatedEvent {
  subject: Subjects.ProductCreated;
  data: {
    quantity: number;
    sold: number;
    id: string;
    version: number;
    name: string;
    imageCover: string;
    price: number;
    priceAfterDiscount?: number;
    category: {
      id: string;
    };
    brand: {
      id: string;
    };
  };
}
