import { Subjects } from './subjects';

// to make sure the class consistent subject and data related to that subject
export interface CouponCreatedEvent {
  subject: Subjects.couponCreated;
  data: {
    id: string;
    name: string;
    version: number
    expire: Date;
    discount: number;
  };
}
