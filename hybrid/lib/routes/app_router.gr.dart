// **************************************************************************
// AutoRouteGenerator
// **************************************************************************

// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// AutoRouteGenerator
// **************************************************************************
//
// ignore_for_file: type=lint

part of 'app_router.dart';

class _$AppRouter extends RootStackRouter {
  _$AppRouter(
      {GlobalKey<NavigatorState>? navigatorKey, required this.authGuard})
      : super(navigatorKey);

  final AuthGuard authGuard;

  @override
  final Map<String, PageFactory> pagesMap = {
    HomeRoute.name: (routeData) {
      return CustomPage<dynamic>(
          routeData: routeData,
          child: const HomePage(),
          transitionsBuilder: TransitionsBuilders.fadeIn,
          opaque: true,
          barrierDismissible: false);
    },
    LoginRoute.name: (routeData) {
      final args = routeData.argsAs<LoginRouteArgs>(
          orElse: () => const LoginRouteArgs());
      return CustomPage<dynamic>(
          routeData: routeData,
          child: LoginPage(key: args.key, username: args.username),
          transitionsBuilder: TransitionsBuilders.fadeIn,
          opaque: true,
          barrierDismissible: false);
    },
    AdminLayoutRoute.name: (routeData) {
      return CustomPage<dynamic>(
          routeData: routeData,
          child: const AdminLayoutPage(),
          transitionsBuilder: TransitionsBuilders.fadeIn,
          opaque: true,
          barrierDismissible: false);
    },
    NotFoundRoute.name: (routeData) {
      return CustomPage<dynamic>(
          routeData: routeData,
          child: const NotFoundPage(),
          transitionsBuilder: TransitionsBuilders.fadeIn,
          opaque: true,
          barrierDismissible: false);
    },
    DashboardRoute.name: (routeData) {
      return CustomPage<dynamic>(
          routeData: routeData,
          child: const DashboardPage(),
          transitionsBuilder: TransitionsBuilders.fadeIn,
          opaque: true,
          barrierDismissible: false);
    },
    GazetteerRoute.name: (routeData) {
      return CustomPage<dynamic>(
          routeData: routeData,
          child: const GazetteerPage(),
          transitionsBuilder: TransitionsBuilders.fadeIn,
          opaque: true,
          barrierDismissible: false);
    },
    UserRoute.name: (routeData) {
      return CustomPage<dynamic>(
          routeData: routeData,
          child: const UserPage(),
          transitionsBuilder: TransitionsBuilders.fadeIn,
          opaque: true,
          barrierDismissible: false);
    },
    RoleRoute.name: (routeData) {
      return CustomPage<dynamic>(
          routeData: routeData,
          child: const RolePage(),
          transitionsBuilder: TransitionsBuilders.fadeIn,
          opaque: true,
          barrierDismissible: false);
    },
    SettingRoute.name: (routeData) {
      return CustomPage<dynamic>(
          routeData: routeData,
          child: const SettingPage(),
          transitionsBuilder: TransitionsBuilders.fadeIn,
          opaque: true,
          barrierDismissible: false);
    },
    AuditRoute.name: (routeData) {
      final args = routeData.argsAs<AuditRouteArgs>(
          orElse: () => const AuditRouteArgs());
      return CustomPage<dynamic>(
          routeData: routeData,
          child: AuditPage(key: args.key),
          transitionsBuilder: TransitionsBuilders.fadeIn,
          opaque: true,
          barrierDismissible: false);
    }
  };

  @override
  List<RouteConfig> get routes => [
        RouteConfig(HomeRoute.name, path: '/'),
        RouteConfig(LoginRoute.name, path: '/login'),
        RouteConfig(AdminLayoutRoute.name, path: '/admin', guards: [
          authGuard
        ], children: [
          RouteConfig('#redirect',
              path: '',
              parent: AdminLayoutRoute.name,
              redirectTo: 'dashboard',
              fullMatch: true),
          RouteConfig(DashboardRoute.name,
              path: 'dashboard', parent: AdminLayoutRoute.name),
          RouteConfig(GazetteerRoute.name,
              path: 'gazetteer', parent: AdminLayoutRoute.name),
          RouteConfig(UserRoute.name,
              path: 'user', parent: AdminLayoutRoute.name),
          RouteConfig(RoleRoute.name,
              path: 'role', parent: AdminLayoutRoute.name),
          RouteConfig(SettingRoute.name,
              path: 'setting', parent: AdminLayoutRoute.name),
          RouteConfig(AuditRoute.name,
              path: 'audit', parent: AdminLayoutRoute.name)
        ]),
        RouteConfig(NotFoundRoute.name, path: '*')
      ];
}

/// generated route for
/// [HomePage]
class HomeRoute extends PageRouteInfo<void> {
  const HomeRoute() : super(HomeRoute.name, path: '/');

  static const String name = 'HomeRoute';
}

/// generated route for
/// [LoginPage]
class LoginRoute extends PageRouteInfo<LoginRouteArgs> {
  LoginRoute({Key? key, String? username})
      : super(LoginRoute.name,
            path: '/login', args: LoginRouteArgs(key: key, username: username));

  static const String name = 'LoginRoute';
}

class LoginRouteArgs {
  const LoginRouteArgs({this.key, this.username});

  final Key? key;

  final String? username;

  @override
  String toString() {
    return 'LoginRouteArgs{key: $key, username: $username}';
  }
}

/// generated route for
/// [AdminLayoutPage]
class AdminLayoutRoute extends PageRouteInfo<void> {
  const AdminLayoutRoute({List<PageRouteInfo>? children})
      : super(AdminLayoutRoute.name, path: '/admin', initialChildren: children);

  static const String name = 'AdminLayoutRoute';
}

/// generated route for
/// [NotFoundPage]
class NotFoundRoute extends PageRouteInfo<void> {
  const NotFoundRoute() : super(NotFoundRoute.name, path: '*');

  static const String name = 'NotFoundRoute';
}

/// generated route for
/// [DashboardPage]
class DashboardRoute extends PageRouteInfo<void> {
  const DashboardRoute() : super(DashboardRoute.name, path: 'dashboard');

  static const String name = 'DashboardRoute';
}

/// generated route for
/// [GazetteerPage]
class GazetteerRoute extends PageRouteInfo<void> {
  const GazetteerRoute() : super(GazetteerRoute.name, path: 'gazetteer');

  static const String name = 'GazetteerRoute';
}

/// generated route for
/// [UserPage]
class UserRoute extends PageRouteInfo<void> {
  const UserRoute() : super(UserRoute.name, path: 'user');

  static const String name = 'UserRoute';
}

/// generated route for
/// [RolePage]
class RoleRoute extends PageRouteInfo<void> {
  const RoleRoute() : super(RoleRoute.name, path: 'role');

  static const String name = 'RoleRoute';
}

/// generated route for
/// [SettingPage]
class SettingRoute extends PageRouteInfo<void> {
  const SettingRoute() : super(SettingRoute.name, path: 'setting');

  static const String name = 'SettingRoute';
}

/// generated route for
/// [AuditPage]
class AuditRoute extends PageRouteInfo<AuditRouteArgs> {
  AuditRoute({Key? key})
      : super(AuditRoute.name, path: 'audit', args: AuditRouteArgs(key: key));

  static const String name = 'AuditRoute';
}

class AuditRouteArgs {
  const AuditRouteArgs({this.key});

  final Key? key;

  @override
  String toString() {
    return 'AuditRouteArgs{key: $key}';
  }
}
