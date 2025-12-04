import { Subjects } from './subjects';

// to make sure the class consistent subject and data related to that subject
export interface productDeletedEvent {
  subject: Subjects.ProductDeleted;
  data: {
    id: string;
  };
}
