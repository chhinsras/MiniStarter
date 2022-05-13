import 'package:flutter/material.dart';

class MenuItem {
  final String? text;
  final IconData icon;

  MenuItem({required this.text, required this.icon});
}

List<MenuItem> menuList = [
  MenuItem(text: 'Dashboard', icon: Icons.dashboard),
  MenuItem(text: 'Gazetteer', icon: Icons.table_bar),
  MenuItem(text: 'Users', icon: Icons.people),
  MenuItem(text: 'Roles', icon: Icons.supervised_user_circle),
  MenuItem(text: 'Changelogs', icon: Icons.code),
];
