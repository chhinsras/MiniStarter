import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'auth-guard.dart';
import '../layouts/admin-layout.dart';
import '../views/views.dart';

part 'app_router.gr.dart';

@MaterialAutoRouter(
  replaceInRouteName: 'Page,Route',
  routes: <AutoRoute>[
    AutoRoute(page: HomePage, path: '/', initial: true),
    AutoRoute(path: '/login', page: LoginPage),
    AutoRoute(path: '/admin', page: AdminLayoutPage, guards: [
      AuthGuard
    ], children: [
      AutoRoute(page: DashboardPage, path: 'dashboard', initial: true),
      AutoRoute(page: GazetteerPage, path: 'gazetteer'),
      AutoRoute(page: UserPage, path: 'user'),
      AutoRoute(page: RolePage, path: 'role'),
      AutoRoute(page: AuditPage, path: 'audit')
    ]),
  ],
)
// extend the generated private router
class AppRouter extends _$AppRouter {
  AppRouter({required AuthGuard authGuard}) : super(authGuard: authGuard);
}
