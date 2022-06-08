import 'package:auto_route/auto_route.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:hybrid/helpers/helpers.dart';
import 'package:hybrid/providers/providers.dart';
import 'app_router.dart';

class AuthGuard extends AutoRouteGuard {
  AuthGuard({required this.container});
  ProviderContainer container;

  @override
  void onNavigation(NavigationResolver resolver, StackRouter router) {
    container.read(appProvider).isAuthenticated().then(
          (authenticatd) => {
            if (authenticatd)
              {resolver.next(true)}
            else
              {
                Toastr.showWarning(
                    text: 'Access Denied, please login to continue.'),
                router.push(LoginRoute())
              }
          },
        );
  }
}
