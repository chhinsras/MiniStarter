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
    AuditRoute.name: (routeData) {
      return MaterialPageX<dynamic>(
          routeData: routeData, child: const AuditPage());
    },
    SettingRoute.name: (routeData) {
      return MaterialPageX<dynamic>(
          routeData: routeData, child: const SettingPage());
    }
  };

  @override
  List<RouteConfig> get routes => [
        RouteConfig(HomeRoute.name, path: '/'),
        RouteConfig(AuditRoute.name, path: '/audit-page'),
        RouteConfig(SettingRoute.name, path: '/setting-page')
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
/// [AuditPage]
class AuditRoute extends PageRouteInfo<void> {
  const AuditRoute() : super(AuditRoute.name, path: '/audit-page');

  static const String name = 'AuditRoute';
}

/// generated route for
/// [SettingPage]
class SettingRoute extends PageRouteInfo<void> {
  const SettingRoute() : super(SettingRoute.name, path: '/setting-page');

  static const String name = 'SettingRoute';
}
