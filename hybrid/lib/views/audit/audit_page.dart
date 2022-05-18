import 'package:flutter/material.dart';
import 'package:hybrid/extensions/extensions.dart';

class AuditPage extends StatelessWidget {
  const AuditPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          context.localization.translate('changelog'),
        ),
      ),
      body: const Center(
        child: Text("Audit Screen"),
      ),
    );
  }
}
