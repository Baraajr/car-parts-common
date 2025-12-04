import { Subjects } from './subjects';

// to make sure the class consistent subject and data related to that subject
export interface ProductCreatedEvent {
  subject: Subjects.ProductCreated;
  data: {
    id: string;
    name: string;
    imageCover: string;
    price: Number;
    priceAfterDiscount?: Number;
    category: {
      id: string;
    };
    brand: {
      id: string;
    };
  };
}
