import 'package:flutter/material.dart';
import 'package:hybrid/services/audit_service.dart';
import '../../models/models.dart';

class AuditPage extends StatelessWidget {
  AuditPage({Key? key}) : super(key: key);

  final auditService = AuditService();

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
              return Column(
                children: [
                  for (var element in snapshot.data!)
                    Text(element.tableName.toString())
                ],
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
