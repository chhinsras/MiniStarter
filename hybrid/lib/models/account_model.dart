import 'package:hybrid/config/config.dart';
import 'package:hybrid/models/base_model.dart';
import 'package:hybrid/models/models.dart';
import 'package:hybrid/routes/app_router.dart';
import 'package:hybrid/services/account_service.dart';

class AccountModel extends BaseModel {
  void login(dynamic request) async {
    var user = await AccountService().login(request);
    if (user != null) {
      await appCache.cacheUserToken(user.token);
      await appCache.cacheUserRefreshToken(user.refreshToken);
    }
    getIt<AppRouter>().push(const AdminLayoutRoute());
    notifyListeners();
  }

  void logout() async {
    await appCache.invalidateAuthentication();
    await ref.read(appModel).reInitializeApp();
    await getIt<AppRouter>().push(LoginRoute());
    notifyListeners();
  }

  Future<bool> isAuthenticated() async {
    return AccountService().isAuthenticated();
  }

  Future<bool> isAuthorized(
      String authorizationType, List<String> allowedData) async {
    return AccountService().isAuthorized(authorizationType, allowedData);
  }
}
