import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:hybrid/services/audit_service.dart';
import '../../components/components.dart';
import '../../models/models.dart';

class AuditPage extends StatelessWidget {
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
  Widget build(BuildContext context) {
    List<Widget> children = [];

    return FutureBuilder(
      future: auditService.getAudits(),
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
              return SingleChildScrollView(
                child: AppDataTable(
                  data: snapshot.data!.map((e) => e.toJson()).toList(),
                  columns: _columns,
                  title: 'Audits',
                ),
              );
            }
          case ConnectionState.none:
            // TODO: Handle this case.
            break;
          case ConnectionState.active:
            // TODO: Handle this case.
            break;
          default:
            return const Text('Unhandle states.');
        }
        return const Center();
      },
    );
  }
}
