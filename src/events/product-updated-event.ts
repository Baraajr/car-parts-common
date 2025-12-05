import { Subjects } from './subjects';

// to make sure the class consistent subject and data related to that subject
export interface ProductUpdatedEvent {
  subject: Subjects.productUpdated;
  data: {
    id: string;
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
