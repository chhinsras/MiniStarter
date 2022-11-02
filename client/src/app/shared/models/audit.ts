import { PaginatedFilter } from "./pagination";

export class Audit {
  id: string;
  userId: string;
  type: string;
  tableName: string;
  timeStamp: string;
  oldValues: string;
  newValues: string;
  affectedColumns: string;
  primaryKey: string;
}

export class AuditParams implements PaginatedFilter {
  searchString: string;
  pageNumber: number = 1;
  pageSize: number = 5;
  orderBy: string;
}
