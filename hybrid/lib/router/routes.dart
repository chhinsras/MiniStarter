import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:hybrid/views/dashboard/dashboard_page.dart';
import '../views/views.dart';

final appRouter = GoRouter(
  initialLocation: '/',
  routes: [
    GoRoute(
        path: '/',
        builder: (context, state) => HomePage(key: state.pageKey),
        routes: [
          GoRoute(
            path: 'dashboard',
            builder: (context, state) => DashboardPage(),
          ),
          GoRoute(
            path: 'audit',
            builder: (context, state) => const AuditPage(),
          ),
        ]),
  ],
  errorPageBuilder: (context, state) => MaterialPage(
    key: state.pageKey,
    child: Scaffold(
      body: Center(
        child: Text(state.error.toString()),
      ),
    ),
  ),
);
