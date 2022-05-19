import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:hybrid/config/config.dart';
import 'package:hybrid/extensions/extensions.dart';

import '../../layouts/menu_list.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
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
        AdminLayoutRoute(),
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
