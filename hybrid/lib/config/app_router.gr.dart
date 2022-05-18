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
      final args =
          routeData.argsAs<HomeRouteArgs>(orElse: () => const HomeRouteArgs());
      return MaterialPageX<dynamic>(
          routeData: routeData, child: HomePage(key: args.key));
    },
    DashboardRoute.name: (routeData) {
      final args = routeData.argsAs<DashboardRouteArgs>(
          orElse: () => const DashboardRouteArgs());
      return MaterialPageX<dynamic>(
          routeData: routeData, child: DashboardPage(key: args.key));
    },
    AdminRoute.name: (routeData) {
      return MaterialPageX<dynamic>(
          routeData: routeData, child: const AdminPage());
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
      return MaterialPageX<dynamic>(
          routeData: routeData, child: const AuditPage());
    }
  };

  @override
  List<RouteConfig> get routes => [
        RouteConfig(HomeRoute.name, path: '/'),
        RouteConfig(DashboardRoute.name, path: '/dashboard'),
        RouteConfig(AdminRoute.name, path: '/admin', children: [
          RouteConfig(GazetteerRoute.name,
              path: 'gazetteer', parent: AdminRoute.name),
          RouteConfig(UserRoute.name, path: 'user', parent: AdminRoute.name),
          RouteConfig(RoleRoute.name, path: 'role', parent: AdminRoute.name),
          RouteConfig(AuditRoute.name, path: 'audit', parent: AdminRoute.name)
        ])
      ];
}

/// generated route for
/// [HomePage]
class HomeRoute extends PageRouteInfo<HomeRouteArgs> {
  HomeRoute({Key? key})
      : super(HomeRoute.name, path: '/', args: HomeRouteArgs(key: key));

  static const String name = 'HomeRoute';
}

class HomeRouteArgs {
  const HomeRouteArgs({this.key});

  final Key? key;

  @override
  String toString() {
    return 'HomeRouteArgs{key: $key}';
  }
}

/// generated route for
/// [DashboardPage]
class DashboardRoute extends PageRouteInfo<DashboardRouteArgs> {
  DashboardRoute({Key? key})
      : super(DashboardRoute.name,
            path: '/dashboard', args: DashboardRouteArgs(key: key));

  static const String name = 'DashboardRoute';
}

class DashboardRouteArgs {
  const DashboardRouteArgs({this.key});

  final Key? key;

  @override
  String toString() {
    return 'DashboardRouteArgs{key: $key}';
  }
}

/// generated route for
/// [AdminPage]
class AdminRoute extends PageRouteInfo<void> {
  const AdminRoute({List<PageRouteInfo>? children})
      : super(AdminRoute.name, path: '/admin', initialChildren: children);

  static const String name = 'AdminRoute';
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
class AuditRoute extends PageRouteInfo<void> {
  const AuditRoute() : super(AuditRoute.name, path: 'audit');

  static const String name = 'AuditRoute';
}
