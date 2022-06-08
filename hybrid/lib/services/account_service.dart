import 'dart:convert';
import 'package:hybrid/api/agent.dart';
import 'package:hybrid/config/app_cache.dart';
import 'package:hybrid/helpers/helpers.dart';
import 'package:hybrid/models/models.dart';
import 'package:jwt_decoder/jwt_decoder.dart';

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

  Future<bool> isAuthorized(
      String authorizationType, List<String> allowedData) async {
    if (allowedData.isEmpty) {
      return true;
    }
    var token = await _appCache.getUserToken();

    if (token != null) {
      Map<String, dynamic> decodedToken = JwtDecoder.decode(token);
      jsonEncode(decodedToken); // has to add this line
      if (decodedToken.isEmpty) {
        return false;
      }
      if (authorizationType == 'Role') {
        final roles = decodedToken[
            'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

        if (roles.isEmpty) return false;
        return allowedData.any((element) => roles.contains(element));
      } else if (authorizationType == 'Permission') {
        final List<String> permissions = decodedToken['Permission'];
        if (permissions.isEmpty) return false;
        return allowedData.any((element) => permissions.contains(element));
      }
    }

    return false;
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
