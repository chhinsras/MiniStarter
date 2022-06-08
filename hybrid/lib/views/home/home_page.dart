import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:hybrid/layouts/menu_list.dart';
import 'package:hybrid/routes/app_router.dart';

class HomePage extends ConsumerWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      body: Column(
        children: [
          MaterialButton(
            child: const Text(
              'Go to Login',
              style: TextStyle(color: Colors.white),
            ),
            onPressed: () => context.router.navigate(
              LoginRoute(),
            ),
          ),
          Expanded(
            child: GridView.count(
              padding: const EdgeInsets.all(8),
              crossAxisCount: 3,
              children: [
                for (AppMenuItem item in moduleMenuList)
                  moduleMenuItem(context, item),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget moduleMenuItem(BuildContext context, AppMenuItem item) {
    return InkWell(
      onTap: () => context.router.navigate(
        const AdminLayoutRoute(),
      ),
      child: Container(
          margin: const EdgeInsets.all(10),
          width: 100,
          height: 100,
          decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(10),
              color: Theme.of(context).primaryColor),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Icon(
                item.icon,
                size: 25,
              ),
              Text(item.text),
            ],
          )),
    );
  }
}
