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
  _$AppRouter([GlobalKey<NavigatorState>? navigatorKey]) : super(navigatorKey);

  @override
  final Map<String, PageFactory> pagesMap = {
    HomeRoute.name: (routeData) {
      return MaterialPageX<dynamic>(
          routeData: routeData, child: const HomePage());
    },
    AdminLayoutRoute.name: (routeData) {
      return MaterialPageX<dynamic>(
          routeData: routeData, child: const AdminLayoutPage());
    },
    DashboardRoute.name: (routeData) {
      return MaterialPageX<dynamic>(
          routeData: routeData, child: const DashboardPage());
    },
    GazetteerRoute.name: (routeData) {
      return MaterialPageX<dynamic>(
          routeData: routeData, child: const GazetteerPage());
    },
    UserRoute.name: (routeData) {
      return MaterialPageX<dynamic>(
          routeData: routeData, child: const UserPage());
    },
    RoleRoute.name: (routeData) {
      return MaterialPageX<dynamic>(
          routeData: routeData, child: const RolePage());
    },
    AuditRoute.name: (routeData) {
      final args = routeData.argsAs<AuditRouteArgs>(
          orElse: () => const AuditRouteArgs());
      return MaterialPageX<dynamic>(
          routeData: routeData, child: AuditPage(key: args.key));
    }
  };

  @override
  List<RouteConfig> get routes => [
        RouteConfig(HomeRoute.name, path: '/'),
        RouteConfig(AdminLayoutRoute.name, path: '/admin', children: [
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
          RouteConfig(AuditRoute.name,
              path: 'audit', parent: AdminLayoutRoute.name)
        ])
      ];
}

/// generated route for
/// [HomePage]
class HomeRoute extends PageRouteInfo<void> {
  const HomeRoute() : super(HomeRoute.name, path: '/');

  static const String name = 'HomeRoute';
}

/// generated route for
/// [AdminLayoutPage]
class AdminLayoutRoute extends PageRouteInfo<void> {
  const AdminLayoutRoute({List<PageRouteInfo>? children})
      : super(AdminLayoutRoute.name, path: '/admin', initialChildren: children);

  static const String name = 'AdminLayoutRoute';
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
