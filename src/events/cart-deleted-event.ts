import { Subjects } from './subjects';

export interface CartDeletedEvent {
  subject: Subjects.cartDeleted;
  data: {
    id: string;
    userId: string;
  };
}
