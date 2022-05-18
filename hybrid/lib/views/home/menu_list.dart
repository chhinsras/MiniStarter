import 'package:flutter/material.dart';

class AppMenuItem {
  final String text;
  final IconData icon;
  final String route;

  AppMenuItem({required this.text, required this.icon, required this.route});
}

List<AppMenuItem> drawerMenuList = [
  AppMenuItem(text: 'Dashboard', icon: Icons.dashboard, route: '/dashboard'),
  AppMenuItem(text: 'Gazetteer', icon: Icons.table_bar, route: '/gazetteer'),
  AppMenuItem(text: 'Users', icon: Icons.people, route: '/user'),
  AppMenuItem(text: 'Admin', icon: Icons.admin_panel_settings, route: '/admin'),
  AppMenuItem(text: 'Changelogs', icon: Icons.code, route: '/audit'),
];

List<AppMenuItem> moduleMenuList = [
  AppMenuItem(text: 'Dashboard', icon: Icons.dashboard, route: '/dashboard'),
  AppMenuItem(
      text: 'Feature 1', icon: Icons.featured_play_list, route: '/feature'),
  AppMenuItem(
      text: 'Feature 2', icon: Icons.featured_play_list, route: '/feature'),
  AppMenuItem(
      text: 'Feature 3', icon: Icons.featured_play_list, route: '/feature'),
  AppMenuItem(
      text: 'Feature 4', icon: Icons.featured_play_list, route: '/feature'),
  AppMenuItem(
      text: 'Feature 5', icon: Icons.featured_play_list, route: '/feature'),
  AppMenuItem(
      text: 'Feature 6', icon: Icons.featured_play_list, route: '/feature'),
  AppMenuItem(
      text: 'Feature 7', icon: Icons.featured_play_list, route: '/feature'),
  AppMenuItem(
      text: 'Feature 8', icon: Icons.featured_play_list, route: '/feature'),
];
