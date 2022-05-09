// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'audit.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Audit _$AuditFromJson(Map<String, dynamic> json) => Audit(
      json['id'] as int,
      json['userId'] as int,
      json['type'] as String?,
      json['tableName'] as String?,
      DateTime.parse(json['dateTime'] as String),
      json['oldValues'] as String?,
      json['newValues'] as String?,
      json['affectedColumns'] as String?,
      json['primaryKey'] as String?,
    );

Map<String, dynamic> _$AuditToJson(Audit instance) => <String, dynamic>{
      'id': instance.id,
      'userId': instance.userId,
      'type': instance.type,
      'tableName': instance.tableName,
      'dateTime': instance.dateTime.toIso8601String(),
      'oldValues': instance.oldValues,
      'newValues': instance.newValues,
      'affectedColumns': instance.affectedColumns,
      'primaryKey': instance.primaryKey,
    };
