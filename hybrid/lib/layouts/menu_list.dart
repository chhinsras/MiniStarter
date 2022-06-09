import 'package:flutter/material.dart';

class AppMenuItem {
  final String text;
  final IconData icon;
  final String route;
  final String permission;

  AppMenuItem(
      {required this.text,
      required this.icon,
      required this.route,
      required this.permission});
}

List<AppMenuItem> drawerMenuList = [
  AppMenuItem(
      text: 'Dashboard',
      icon: Icons.dashboard,
      route: '/admin/dashboard',
      permission: 'Permissions.Reports.Dashboard'),
  AppMenuItem(
      text: 'Gazetteer',
      icon: Icons.table_bar,
      route: '/admin/gazetteer',
      permission: 'Permissions.Gazetteer.Province'),
  AppMenuItem(
      text: 'Users',
      icon: Icons.people,
      route: '/admin/user',
      permission: 'Permissions.Users.View'),
  AppMenuItem(
      text: 'Roles',
      icon: Icons.people,
      route: '/admin/role',
      permission: 'Permissions.Roles.View'),
  AppMenuItem(
      text: 'Setting',
      icon: Icons.admin_panel_settings,
      route: '/admin/setting',
      permission: 'Permissions.Reports.Dashboard'),
  AppMenuItem(
      text: 'Changelogs',
      icon: Icons.code,
      route: '/admin/audit',
      permission: 'Permissions.Audit.View'),
];

List<AppMenuItem> moduleMenuList = [
  AppMenuItem(
      text: 'Dashboard',
      icon: Icons.dashboard,
      route: '/dashboard',
      permission: 'Permissions.Reports.Dashboard'),
  AppMenuItem(
      text: 'Feature 1',
      icon: Icons.featured_play_list,
      route: '/feature',
      permission: 'Permissions.Reports.Dashboard'),
  AppMenuItem(
      text: 'Feature 2',
      icon: Icons.featured_play_list,
      route: '/feature',
      permission: 'Permissions.Reports.Dashboard'),
  AppMenuItem(
      text: 'Feature 3',
      icon: Icons.featured_play_list,
      route: '/feature',
      permission: 'Permissions.Reports.Dashboard'),
  AppMenuItem(
      text: 'Feature 4',
      icon: Icons.featured_play_list,
      route: '/feature',
      permission: 'Permissions.Reports.Dashboard'),
  AppMenuItem(
      text: 'Feature 5',
      icon: Icons.featured_play_list,
      route: '/feature',
      permission: 'Permissions.Reports.Dashboard'),
  AppMenuItem(
      text: 'Feature 6',
      icon: Icons.featured_play_list,
      route: '/feature',
      permission: 'Permissions.Reports.Dashboard'),
  AppMenuItem(
      text: 'Feature 7',
      icon: Icons.featured_play_list,
      route: '/feature,',
      permission: 'Permissions.Reports.Dashboard'),
  AppMenuItem(
      text: 'Feature 8',
      icon: Icons.featured_play_list,
      route: '/feature',
      permission: 'Permissions.Reports.Dashboard'),
];
