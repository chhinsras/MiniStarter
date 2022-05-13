import 'package:flutter/material.dart';

class AppMenuItem {
  final String? text;
  final IconData icon;

  AppMenuItem({required this.text, required this.icon});
}

List<AppMenuItem> menuList = [
  AppMenuItem(text: 'Dashboard', icon: Icons.dashboard),
  AppMenuItem(text: 'Gazetteer', icon: Icons.table_bar),
  AppMenuItem(text: 'Users', icon: Icons.people),
  AppMenuItem(text: 'Roles', icon: Icons.supervised_user_circle),
  AppMenuItem(text: 'Changelogs', icon: Icons.code),
];
