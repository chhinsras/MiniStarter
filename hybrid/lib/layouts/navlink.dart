import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';

class NavLink {
  final PageRouteInfo route;
  final IconData icon;
  final String label;

  const NavLink({
    required this.route,
    required this.icon,
    required this.label,
  });
}
