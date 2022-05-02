import { PaginatedFilter } from "./pagination"

export interface User {
    id: string
    userName: string
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
    isActive: boolean
    emailConfirmed: boolean
    phoneNumber: string
    imageUrl: string
    token: string
    refreshToken: string
    refreshTokenExpiryTime: Date
}

export class UserParams implements PaginatedFilter {
  searchTerm: string;
  pageNumber: number = 1;
  pageSize: number = 5;
  orderBy: string;
}


// export interface UserRole
// {
//   userRoles: UserRoleModel[];
// }

export interface UserRole {
  roleId: string;
  roleName: string;
  description: string;
  enabled: boolean;
}
