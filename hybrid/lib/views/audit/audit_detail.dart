import 'package:flutter/material.dart';
import 'package:hybrid/components/components.dart';
import 'package:hybrid/config/size_config.dart';
import 'package:hybrid/entities/entities.dart';

class AuditDetail extends StatelessWidget {
  AuditDetail({Key? key, required this.audit}) : super(key: key);
  Audit audit;

  @override
  Widget build(BuildContext context) {
    return Dialog(
      insetPadding: const EdgeInsets.all(100),
      child: SingleChildScrollView(
        child: Column(
          children: [
            Container(
              padding: const EdgeInsets.only(left: 16, right: 16),
              width: SizeConfig.screenWidth,
              height: 50,
              color: Theme.of(context).primaryColor,
              child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const Text('Audit Detail'),
                    IconButton(
                        onPressed: () {
                          Navigator.of(context).pop();
                        },
                        icon: const Icon(Icons.close))
                  ]),
            ),
            Container(
              height: 400,
              padding: const EdgeInsets.all(16),
              child: SingleChildScrollView(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const AppLabel(label: 'User Details'),
                    Table(
                      columnWidths: const {
                        0: FlexColumnWidth(1),
                        1: FlexColumnWidth(3),
                      },
                      border: TableBorder.all(width: 1),
                      children: [
                        appTableRow('User Id', Text(audit.userId.toString())),
                      ],
                    ),
                    const AppLabel(label: 'Auditlog Details'),
                    Table(
                      columnWidths: const {
                        0: FlexColumnWidth(1),
                        1: FlexColumnWidth(3),
                      },
                      border: TableBorder.all(width: 1),
                      children: [
                        appTableRow('Id', Text(audit.id.toString())),
                        appTableRow(
                            'Table Name', Text(audit.tableName ?? 'N/A')),
                        appTableRow('Type', Text(audit.type ?? 'N/A')),
                        appTableRow('DateTime',
                            Text(audit.dateTime.toLocal().toString())),
                        appTableRow('Affected Columns',
                            Text(audit.affectedColumns ?? 'N/A')),
                        appTableRow(
                            'Primary Key', Text(audit.primaryKey ?? 'N/A')),
                        appTableRow(
                            'Old Values', Text(audit.oldValues ?? 'N/A')),
                        appTableRow(
                            'New Values', Text(audit.newValues ?? 'N/A')),
                      ],
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
