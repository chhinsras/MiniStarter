import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:hybrid/routes/app_router.dart';

class NotFoundPage extends StatelessWidget {
  const NotFoundPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
            child: Column(
      children: [
        const Text('Page Not Found.'),
        MaterialButton(
            child: const Text('Go home'),
            onPressed: () => context.router.push(const HomeRoute()))
      ],
    )));
  }
}
