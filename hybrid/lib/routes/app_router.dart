import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:hybrid/layouts/admin_layout.dart';
import 'package:hybrid/views/views.dart';
import 'auth_guard.dart';
part 'app_router.gr.dart';

@MaterialAutoRouter(
  replaceInRouteName: 'Page,Route',
  routes: <AutoRoute>[
    CustomRoute(
        page: HomePage,
        path: '/',
        initial: true,
        transitionsBuilder: TransitionsBuilders.fadeIn),
    CustomRoute(
        path: '/login',
        page: LoginPage,
        transitionsBuilder: TransitionsBuilders.fadeIn),
    CustomRoute(
        path: '/admin',
        page: AdminLayoutPage,
        guards: [AuthGuard],
        children: [
          CustomRoute(
              page: DashboardPage,
              path: 'dashboard',
              initial: true,
              transitionsBuilder: TransitionsBuilders.fadeIn),
          CustomRoute(
              page: GazetteerPage,
              path: 'gazetteer',
              transitionsBuilder: TransitionsBuilders.fadeIn),
          CustomRoute(
              page: UserPage,
              path: 'user',
              transitionsBuilder: TransitionsBuilders.fadeIn),
          CustomRoute(
              page: RolePage,
              path: 'role',
              transitionsBuilder: TransitionsBuilders.fadeIn),
          CustomRoute(
              page: SettingPage,
              path: 'setting',
              transitionsBuilder: TransitionsBuilders.fadeIn),
          CustomRoute(
              page: AuditPage,
              path: 'audit',
              transitionsBuilder: TransitionsBuilders.fadeIn)
        ],
        transitionsBuilder: TransitionsBuilders.fadeIn),
    CustomRoute(
        path: '*',
        page: NotFoundPage,
        transitionsBuilder: TransitionsBuilders.fadeIn),
  ],
)
// extend the generated private router
class AppRouter extends _$AppRouter {
  AppRouter({required AuthGuard authGuard}) : super(authGuard: authGuard);
}
