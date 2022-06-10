export interface MetaData {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
}

export class PaginatedResponse<dynamic> {
  items: dynamic;
  metaData: MetaData;

  // constructor(items: T, metaData: MetaData) {
  //     this.items = items;
  //     this.metaData = metaData;
  // }
}

export interface PaginatedFilter {
  pageNumber: number;
  pageSize: number;
}
