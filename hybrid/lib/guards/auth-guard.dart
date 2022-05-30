import 'package:auto_route/auto_route.dart';
import 'package:hybrid/services/account_service.dart';

import '../config/config.dart';

class AuthGuard extends AutoRouteGuard {
  final AccountService accountService = AccountService();
  @override
  void onNavigation(NavigationResolver resolver, StackRouter router) {
    accountService.isAuthenticated().then((value) => {
          if (value) {resolver.next(true)} else {router.push(LoginRoute())}
        });
  }
}
