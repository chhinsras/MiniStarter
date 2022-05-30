import 'package:auto_route/auto_route.dart';
import 'package:hybrid/services/account_service.dart';
import '../helpers/helpers.dart';
import 'app_router.dart';

class AuthGuard extends AutoRouteGuard {
  final AccountService accountService = AccountService();
  @override
  void onNavigation(NavigationResolver resolver, StackRouter router) {
    accountService.isAuthenticated().then((value) => {
          if (value)
            {resolver.next(true)}
          else
            {
              Toastr.showWarning(
                  text: 'Access Denied, please login to continue.'),
              router.push(LoginRoute())
            }
        });
  }
}
