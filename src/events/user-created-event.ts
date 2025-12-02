import { Subjects } from './subjects';

// to make sure the class consistent subject and data related to that subject
export interface UserCreatedEvent {
  subject: Subjects.UserCreated;
  data: {
    id: string;
    name: string;
    email: string;
  };
}
