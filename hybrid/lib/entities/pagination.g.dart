// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'pagination.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Pagination _$PaginationFromJson(Map<String, dynamic> json) => Pagination(
      currentPage: json['currentPage'] as int,
      totalPages: json['totalPages'] as int,
      pageSize: json['pageSize'] as int,
      totalCount: json['totalCount'] as int,
    );

Map<String, dynamic> _$PaginationToJson(Pagination instance) =>
    <String, dynamic>{
      'currentPage': instance.currentPage,
      'totalPages': instance.totalPages,
      'pageSize': instance.pageSize,
      'totalCount': instance.totalCount,
    };
