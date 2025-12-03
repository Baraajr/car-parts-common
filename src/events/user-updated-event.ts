import { UserRole } from '../types/user-roles';
import { Subjects } from './subjects';

// to make sure the class consistent subject and data related to that subject
export interface UserUpdatedEvent {
  subject: Subjects.UserUpdated;
  data: {
    id: string;
    name?: string;
    email?: string;
    role?: UserRole;
    active?: boolean;
  };
}
