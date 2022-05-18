import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:hybrid/providers/providers.dart';
import 'package:hybrid/views/dashboard/dashboard_page.dart';
import '../views/views.dart';

final appRouter = GoRouter(
  initialLocation: '/',
  routes: [
    GoRoute(
        path: '/',
        builder: (context, state) => HomePage(
              key: state.pageKey,
              currentTab: ProviderContainer().read(appProvider).getSelectedTab,
            ),
        routes: []),
    GoRoute(
      path: '/:route',
      builder: (context, state) => HomePage(
          key: state.pageKey,
          currentTab: ProviderContainer().read(appProvider).getSelectedTab),
    ),
    // GoRoute(
    //   path: '/dashboard',
    //   builder: (context, state) => DashboardPage(),
    // ),
    // GoRoute(
    //   path: '/gazetteer',
    //   builder: (context, state) => DashboardPage(),
    // ),
    // GoRoute(
    //   path: '/user',
    //   builder: (context, state) => DashboardPage(),
    // ),
    // GoRoute(
    //   path: '/role',
    //   builder: (context, state) => DashboardPage(),
    // ),
    // GoRoute(
    //   path: '/audit',
    //   builder: (context, state) => const AuditPage(),
    // ),
  ],
  navigatorBuilder: (context, state, child) => Material(
    child: Column(
      children: [
        Expanded(child: child),
        Padding(
          padding: const EdgeInsets.all(8),
          child: Text(state.location),
        ),
      ],
    ),
  ),
  errorPageBuilder: (context, state) => MaterialPage(
    key: state.pageKey,
    child: Scaffold(
      body: Center(
        child: Text(state.error.toString()),
      ),
    ),
  ),
);
