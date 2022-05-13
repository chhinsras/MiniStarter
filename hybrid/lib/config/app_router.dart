import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:hybrid/views/dashboard/dashboard_page.dart';

import '../views/views.dart';

part 'app_router.gr.dart';

@MaterialAutoRouter(
  replaceInRouteName: 'Page,Route',
  routes: <AutoRoute>[
    AutoRoute(page: HomePage, initial: true),
    AutoRoute(page: DashboardPage),
    AutoRoute(page: AuditPage),
    AutoRoute(page: SettingPage),
  ],
)
class AppRouter extends _$AppRouter {}
