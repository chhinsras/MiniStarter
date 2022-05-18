import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class AdminPage extends StatelessWidget {
  const AdminPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          // leading: IconButton(
          //   icon: const Icon(Icons.close),
          //   onPressed: () {},
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
            context.go('/user');
          },
        ),
        ListTile(
          title: const Text('Manage Roles'),
          onTap: () {},
        ),
        ListTile(
          title: const Text('Manage Gazetteers'),
          onTap: () {},
        ),
        ListTile(
          title: const Text('Changelogs'),
          onTap: () {},
        ),
      ],
    );
  }
}
