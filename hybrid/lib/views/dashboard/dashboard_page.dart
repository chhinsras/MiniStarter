import 'package:flutter/material.dart';
import 'package:hybrid/extensions/extensions.dart';

class DashboardPage extends StatefulWidget {
  DashboardPage({Key? key}) : super(key: key);

  @override
  State<DashboardPage> createState() => _DashboardPageState();
}

class _DashboardPageState extends State<DashboardPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          context.localization.translate('dashboard'),
        ),
      ),
      body: const Center(child: Text('Dashboard Page')),
    );
  }
}
