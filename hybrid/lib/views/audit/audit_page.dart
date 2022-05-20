import 'package:flutter/material.dart';
import 'package:hybrid/services/audit-service.dart';
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
        if (snapshot.hasData) {
          children = [
            Column(
              children: [
                for (var element in snapshot.data!)
                  Text(element.tableName.toString())
              ],
            )
          ];
        } else if (snapshot.hasError) {
        } else {
          children = const [
            Center(
              child: CircularProgressIndicator(),
            ),
            Text('Loading')
          ];
        }

        return Center(
          child: Column(children: children),
        );
      },
    );
  }
}
