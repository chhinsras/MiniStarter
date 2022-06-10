import 'package:json_annotation/json_annotation.dart';
part 'audit.g.dart';

@JsonSerializable()
class Audit {
  int id;
  int userId;
  String? type;
  String? tableName;
  DateTime dateTime;
  String? oldValues;
  String? newValues;
  String? affectedColumns;
  String? primaryKey;

  Audit(
    this.id,
    this.userId,
    this.type,
    this.tableName,
    this.dateTime,
    this.oldValues,
    this.newValues,
    this.affectedColumns,
    this.primaryKey,
  );

  factory Audit.fromJson(Map<String, dynamic> json) => _$AuditFromJson(json);

  Map<String, dynamic> toJson() => _$AuditToJson(this);
}
