import 'package:hybrid/config/app_cache.dart';
import 'package:hybrid/helpers/helpers.dart';
import 'package:jwt_decoder/jwt_decoder.dart';
import '../api/agent.dart';
import '../models/models.dart';

class AccountService {
  final Agent _agent = Agent();
  final AppCache _appCache = AppCache();

  Future<bool> isAuthenticated() async {
    var token = await _appCache.getUserToken();
    if (token != null) {
      return !JwtDecoder.isExpired(token);
    }
    return false;
  }

  bool isAuthorized(String authorizationType, List<String> allowedData) {
    throw UnimplementedError();
  }

  Future<User?> login(dynamic login) async {
    var response = await _agent.loginUser(login);
    if (response.data != null) {
      Toastr.showSuccess(text: 'User Logged In');
      return User.fromJson(response.data);
    }
    return null;
  }

  Future<User?> tryRefreshingToken() async {
    var jwtToken = await _appCache.getUserToken();
    var refreshToken = await _appCache.getUserRefreshToken();
    var request = {'token': jwtToken, 'refreshToken': refreshToken};

    var response = await _agent.refreshToken(request);
    if (response.data != null) {
      Toastr.showSuccess(text: 'Refreshed token.');
      await _appCache.cacheUserToken(response.data['token']);
      await _appCache.cacheUserRefreshToken(response.data['refreshToken']);
      return User.fromJson(response.data);
    } else {
      Toastr.showError(text: 'Something went wrong.');
      await _appCache.invalidate();
    }
    return null;
  }
}
