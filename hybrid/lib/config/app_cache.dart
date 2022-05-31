import 'package:shared_preferences/shared_preferences.dart';

class AppCache {
  static const kToken = 'token';

  Future<void> invalidate() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(kToken);
  }

  Future<String> getUserToken() async {
    final prefs = await SharedPreferences.getInstance();
    return Future.value(prefs.getString(kToken));
  }

  Future<void> cacheUserToken(String? token) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(kToken, token!);
  }
}
