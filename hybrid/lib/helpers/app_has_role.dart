import 'package:flutter/material.dart';
import 'package:hybrid/services/account_service.dart';

class AppHasRole extends StatelessWidget {
  final List<String> roles;
  final Widget child;
  final AccountService accountService = AccountService();

  AppHasRole({
    Key? key,
    required this.roles,
    required this.child,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: accountService.isAuthorized('Role', roles),
      builder: (BuildContext context, AsyncSnapshot<bool> snapshop) {
        if (!snapshop.hasData) {
          return const Center(
            child: CircularProgressIndicator(),
          );
        } else {
          final bool isAuthorized = snapshop.data!;
          return isAuthorized ? child : Container();
        }
      },
    );
  }
}
