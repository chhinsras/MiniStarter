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

  Future<void> cacheUserToken() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(kToken,
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NTM4Nzc3ODUsImV4cCI6MTY4NTQxMzc4NSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.Mu0KqJ9e7TS7DEe8je3cYbZXiw0ateTi39kLhRrDyNQ');
  }
}
