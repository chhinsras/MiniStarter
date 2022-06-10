class Pagination {
  int currentPage;
  int totalPages;
  int pageSize;
  int totalCount;

  Pagination(
      {required this.currentPage,
      required this.totalPages,
      required this.pageSize,
      required this.totalCount});
}

class PaginatedResponse<T> {
  T items;
  Pagination pagination;

  PaginatedResponse({required this.items, required this.pagination});
}

class PaginatedFilter {
  int pageNumber;
  int pageSize;
  PaginatedFilter({required this.pageNumber, required this.pageSize});
}
