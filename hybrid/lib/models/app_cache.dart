import 'package:shared_preferences/shared_preferences.dart';

class AppCache {
  static const kToken = 'token';
  static const kRefreshToken = 'refreshToken';
  static const kLanguageCode = 'languageCode';
  static const kCountryCode = 'countryCode';
  static const kDarkMode = 'darkMode';

  Future<void> invalidateAuthentication() async {
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

  Future<String?> getLanguageCode() async {
    final prefs = await SharedPreferences.getInstance();
    return Future.value(prefs.getString(kLanguageCode));
  }

  Future<String?> getCountryCode() async {
    final prefs = await SharedPreferences.getInstance();
    return Future.value(prefs.getString(kLanguageCode));
  }

  Future<void> cacheLanguageCode(String? languageCode) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(kLanguageCode, languageCode!);
  }

  Future<void> cacheCountryCode(String? countryCode) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(kCountryCode, countryCode!);
  }

  Future<bool> getDarkMode() async {
    final prefs = await SharedPreferences.getInstance();
    return Future.value(prefs.getBool(kDarkMode));
  }

  Future<void> cacheDarkMode(bool darkMode) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setBool(kDarkMode, darkMode);
  }
}
