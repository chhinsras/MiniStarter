import 'package:json_annotation/json_annotation.dart';

part 'pagination.g.dart';

@JsonSerializable()
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

  factory Pagination.fromJson(Map<String, dynamic> json) =>
      _$PaginationFromJson(json);

  Map<String, dynamic> toJson() => _$PaginationToJson(this);
}

class PaginatedResponse {
  dynamic items;
  Pagination pagination;

  PaginatedResponse({required this.items, required this.pagination});
}

class PaginatedFilter {
  int pageNumber;
  int pageSize;
  PaginatedFilter({required this.pageNumber, required this.pageSize});
}
