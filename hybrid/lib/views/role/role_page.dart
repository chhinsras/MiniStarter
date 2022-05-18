import 'package:flutter/material.dart';
import 'package:hybrid/extensions/extensions.dart';

import '../../config/config.dart';

class RolePage extends StatelessWidget {
  const RolePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          context.localization.translate('role'),
        ),
      ),
      body: const Center(
        child: Text("Role Screen"),
      ),
    );
  }
}
