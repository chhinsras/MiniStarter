import 'package:flutter/material.dart';

class AppMenuItem {
  final String? text;
  final IconData icon;
  final String? route;

  AppMenuItem({required this.text, required this.icon, required this.route});
}

List<AppMenuItem> menuList = [
  AppMenuItem(text: 'Dashboard', icon: Icons.dashboard, route: 'dashboard'),
  AppMenuItem(text: 'Gazetteer', icon: Icons.table_bar, route: 'gazetteer'),
  AppMenuItem(text: 'Users', icon: Icons.people, route: 'user'),
  AppMenuItem(text: 'Roles', icon: Icons.supervised_user_circle, route: 'role'),
  AppMenuItem(text: 'Changelogs', icon: Icons.code, route: 'audit'),
];
