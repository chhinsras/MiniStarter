import { PaginatedFilter } from "./pagination";

export class Audit {
  id: string;
  userId: string;
  type: string;
  tableName: string;
  timestamp: string;
  oldValues: string;
  newValues: string;
  affectedColumns: string;
  primaryKey: string;
}

export class AuditParams implements PaginatedFilter {
  searchString: string;
  pageNumber: number;
  pageSize: number;
  orderBy: string;
}
