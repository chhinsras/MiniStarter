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
  searchString: string;
  pageNumber: number;
  pageSize: number;
  orderBy: string;
}


export interface UserRole
{
  userRoles: UserRoleModel[];
}

export interface UserRoleModel {
  roleId: string;
  roleName: string;
  selected: boolean;
}
