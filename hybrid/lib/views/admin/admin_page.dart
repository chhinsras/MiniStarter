import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:hybrid/extensions/extensions.dart';

class AdminPage extends StatelessWidget {
  const AdminPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          context.localization.translate('admin'),
        ),
        // leading: IconButton(
        //   icon: const Icon(Icons.close),
        //   onPressed: () {
        //     context.pop();
        //   },
        // ),
      ),
      body: Center(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const SizedBox(height: 16.0),
            Expanded(
              child: buildMenu(context),
            )
          ],
        ),
      ),
    );
  }

  Widget buildMenu(BuildContext context) {
    return ListView(
      children: [
        ListTile(
          title: const Text('Manage Users'),
          onTap: () {
            context.go('/admin/user');
          },
        ),
        ListTile(
          title: const Text('Manage Roles'),
          onTap: () {
            context.go('/admin/role');
          },
        ),
        ListTile(
          title: const Text('Manage Gazetteers'),
          onTap: () {
            context.go('/admin/gazetteer');
          },
        ),
        ListTile(
          title: const Text('Changelogs'),
          onTap: () {
            context.go('/admin/audit');
          },
        ),
      ],
    );
  }
}
