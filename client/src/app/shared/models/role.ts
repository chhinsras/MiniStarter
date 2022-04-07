import { PaginatedFilter } from "./pagination";

export interface Role {
    id: number
    name: string
    description: string
}

export class RoleParams implements PaginatedFilter {
  searchString: string;
  pageNumber: number;
  pageSize: number;
  orderBy: string;
}
