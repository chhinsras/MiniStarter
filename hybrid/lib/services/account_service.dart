import 'package:shared_preferences/shared_preferences.dart';
import 'package:jwt_decoder/jwt_decoder.dart';
import '../api/agent.dart';

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

  bool login(dynamic login) {
    print(login);
    setToken(
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NTM4Nzc3ODUsImV4cCI6MTY4NTQxMzc4NSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.Mu0KqJ9e7TS7DEe8je3cYbZXiw0ateTi39kLhRrDyNQ');
    isAuthenticated().then(
      (value) => print(value),
    );
    return true;
    // agent.loginUser(login).then((value) => print(value));
  }

  logout() async {
    removeToken();
    isAuthenticated().then(
      (value) => print(value),
    );
  }
}
