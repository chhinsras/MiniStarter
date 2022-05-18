import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:hybrid/views/admin/admin_page.dart';
import 'package:hybrid/views/audit/audit_page.dart';
import 'package:hybrid/views/dashboard/dashboard_page.dart';
import 'package:hybrid/views/gazetteer/gazetteer_page.dart';
import 'package:hybrid/views/home/home_page.dart';
import 'package:hybrid/views/role/role_page.dart';
import 'package:hybrid/views/user/user_page.dart';

part 'app_router.gr.dart';

@MaterialAutoRouter(
  replaceInRouteName: 'Page,Route',
  routes: <AutoRoute>[
    AutoRoute(page: HomePage, path: '/', initial: true),
    AutoRoute(page: DashboardPage, path: '/dashboard'),
    AutoRoute(path: '/admin', page: AdminPage, children: [
      AutoRoute(page: GazetteerPage, path: 'gazetteer'),
      AutoRoute(page: UserPage, path: 'user'),
      AutoRoute(page: RolePage, path: 'role'),
      AutoRoute(page: AuditPage, path: 'audit')
    ]),
  ],
)
// extend the generated private router
class AppRouter extends _$AppRouter {}
