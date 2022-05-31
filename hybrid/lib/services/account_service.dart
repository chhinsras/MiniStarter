import 'dart:convert';

import 'package:hybrid/helpers/helpers.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:jwt_decoder/jwt_decoder.dart';
import '../api/agent.dart';
import '../models/models.dart';

class AccountService {
  final Future<SharedPreferences> _prefs = SharedPreferences.getInstance();
  final Agent agent = Agent();

  String? _token;

  get token => _token;

  Future<String?> getToken() async {
    final prefs = await _prefs;
    _token = prefs.getString('token');
    return _token;
  }

  void setToken(String token) async {
    final prefs = await _prefs;
    _token = token;
    prefs.setString('token', _token!);
  }

  void removeToken() async {
    final prefs = await _prefs;
    _token = null;
    prefs.remove('token');
  }

  Future<bool> isAuthenticated() async {
    await getToken();
    if (_token != null) {
      return !JwtDecoder.isExpired(_token!);
    }
    return false;
  }

  bool isAuthorized(String authorizationType, List<String> allowedData) {
    throw UnimplementedError();
  }

  Future<User?> login(dynamic login) async {
    var response = await agent.loginUser(login);
    if (response.data != null) {
      Toastr.showSuccess(text: 'User Logged In');
      return User.fromJson(response.data);
    }
    return null;
  }

  logout() async {
    removeToken();
  }
}
