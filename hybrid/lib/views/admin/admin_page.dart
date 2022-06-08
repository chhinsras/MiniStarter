import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:hybrid/extensions/extensions.dart';
import 'package:hybrid/routes/app_router.dart';

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
        body: Column(
          children: [
            Column(
              children: [
                InkWell(
                    onTap: () => context.router.push(const UserRoute()),
                    child: const Text('User')),
                InkWell(
                    onTap: () => context.router.push(const RoleRoute()),
                    child: const Text('Role'))
              ],
            ),
            const Expanded(child: AutoRouter())
          ],
        )

        // Center(
        //   child: Column(
        //     crossAxisAlignment: CrossAxisAlignment.center,
        //     children: [
        //       const SizedBox(height: 16.0),
        //       Expanded(
        //         child: buildMenu(context),
        //       )
        //     ],
        //   ),
        // ),
        );
  }

  Widget buildMenu(BuildContext context) {
    return ListView(
      children: [
        ListTile(
          title: const Text('Manage Users'),
          onTap: () {
            context.router.pushNamed('user');
          },
        ),
        ListTile(
          title: const Text('Manage Roles'),
          onTap: () {
            context.router.pushNamed('role');
          },
        ),
        ListTile(
          title: const Text('Manage Gazetteers'),
          onTap: () {
            context.router.pushNamed('gazetteer');
          },
        ),
        ListTile(
          title: const Text('Changelogs'),
          onTap: () {
            context.router.pushNamed('audit');
          },
        ),
      ],
    );
  }
}
