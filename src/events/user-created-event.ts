import { Subjects } from './subjects';

// to make sure the class consistent subject and data related to that subject
export interface UserCreatedEvent {
  subject: Subjects.UserCreated;
  data: {
    id: string;
    version: number
    name: string;
    email: string;
  };
}
