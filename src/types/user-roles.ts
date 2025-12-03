// roles.ts
export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
  SUPER_ADMIN = 'superAdmin',
}

// For validation arrays
export const ALLOWED_ROLES = Object.values(UserRole);
