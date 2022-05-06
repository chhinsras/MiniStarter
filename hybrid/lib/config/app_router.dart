import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';

import '../views/views.dart';

part 'app_router.gr.dart';

@MaterialAutoRouter(
  replaceInRouteName: 'Page,Route',
  routes: <AutoRoute>[
    AutoRoute(page: HomePage, initial: true),
    AutoRoute(page: AuditPage),
    AutoRoute(page: SettingPage),
  ],
)
class AppRouter extends _$AppRouter {}
