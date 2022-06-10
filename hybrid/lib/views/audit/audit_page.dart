import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:hybrid/components/components.dart';
import 'package:hybrid/entities/entities.dart';
import 'package:hybrid/models/models.dart';
import 'package:hybrid/services/audit_service.dart';

class AuditPage extends ConsumerWidget {
  AuditPage({Key? key}) : super(key: key);

  final auditService = AuditService();

  final _columns = [
    AppDataColumn(key: 'id', label: 'ID'),
    AppDataColumn(key: 'userId', label: 'User Id'),
    AppDataColumn(key: 'type', label: 'Type'),
    AppDataColumn(key: 'tableName', label: 'Table Name'),
    AppDataColumn(key: 'dateTime', label: 'DateTime'),
    AppDataColumn(key: 'oldValues', label: 'Old Values'),
    AppDataColumn(key: 'newValues', label: 'New Values'),
    AppDataColumn(key: 'affectedColumns', label: 'Affected Columns'),
    AppDataColumn(key: 'primaryKey', label: 'Primary Key')
  ];
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return FutureBuilder(
      future: ref.read(auditModel).loadAudits(),
      builder: (context, AsyncSnapshot<List<Audit>> snapshot) {
        switch (snapshot.connectionState) {
          case ConnectionState.waiting:
            return const Center(
              child: CircularProgressIndicator(),
            );
          case ConnectionState.done:
            if (snapshot.hasError) {
              return Center(
                child: Text(
                  snapshot.error.toString(),
                ),
              );
            } else {
              return AppDataTable(
                data: snapshot.data!.map((e) => e.toJson()).toList(),
                columns: _columns,
                title: 'Audits',
              );
            }
          case ConnectionState.none:
            break;
          case ConnectionState.active:
            break;
          default:
            return const Text('Unhandle states.');
        }
        return const Center();
      },
    );
  }
}
