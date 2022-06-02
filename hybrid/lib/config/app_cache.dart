import 'package:shared_preferences/shared_preferences.dart';

class AppCache {
  static const kToken = 'token';
  static const kRefreshToken = 'refreshToken';

  Future<void> invalidate() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(kToken);
    await prefs.remove(kRefreshToken);
  }

  Future<String?> getUserToken() async {
    final prefs = await SharedPreferences.getInstance();
    return Future.value(prefs.getString(kToken));
  }

  Future<String?> getUserRefreshToken() async {
    final prefs = await SharedPreferences.getInstance();
    return Future.value(prefs.getString(kRefreshToken));
  }

  Future<void> cacheUserToken(String? token) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(kToken, token!);
  }

  Future<void> cacheUserRefreshToken(String? refreshToken) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(kRefreshToken, refreshToken!);
  }
}
