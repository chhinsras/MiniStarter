import 'package:flutter/material.dart';
import 'package:hybrid/extensions/extensions.dart';

class UserPage extends StatelessWidget {
  const UserPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          context.localization.translate('user'),
        ),
      ),
      body: const Center(
        child: Text("User Screen"),
      ),
    );
  }
}
