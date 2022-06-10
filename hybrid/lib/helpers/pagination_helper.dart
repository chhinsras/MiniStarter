import 'dart:convert';
import 'package:dio/dio.dart';
import 'package:hybrid/entities/entities.dart';

class PaginationHelper {
  static Pagination? getPaginatedResponse(Response response) {
    if (response.headers['Pagination'] != null) {
      var paginationJson = response.headers['Pagination']!.join(",");
      Pagination pagination = Pagination.fromJson(jsonDecode(paginationJson));
      return pagination;
    }
    return null;
  }

  static getPaginationHeaders(int pageNumber, int pageSize) {
    Map<String, dynamic> params = {};
    // to append pageNumber and pageSize to params
    return params;
  }
}
