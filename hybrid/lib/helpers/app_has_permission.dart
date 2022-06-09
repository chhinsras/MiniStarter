import 'package:flutter/material.dart';
import 'package:hybrid/services/account_service.dart';

class AppHasPermission extends StatelessWidget {
  final List<String> permissions;
  final Widget child;

  final AccountService _accountService = AccountService();

  AppHasPermission({
    Key? key,
    required this.permissions,
    required this.child,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: _accountService.isAuthorized('Permission', permissions),
      builder: (BuildContext context, AsyncSnapshot<bool> snapshop) {
        if (snapshop.hasData) {
          final bool isAuthorized = snapshop.data!;
          return isAuthorized ? child : Container();
        }
        return Container();
      },
    );
  }
}
