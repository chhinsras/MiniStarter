import 'dart:async';

import 'package:flutter/material.dart';
import 'package:hybrid/models/account.dart';
import 'package:hybrid/services/account_service.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../config/app_cache.dart';
import '../config/config.dart';
import '../config/globals.dart' as globle;
import '../routes/app_router.dart';

class AppTab {
  static const int dashboard = 0;
  static const int gazetteer = 1;
  static const int user = 2;
  static const int role = 3;
  static const int audit = 4;
}

class AppProvider extends ChangeNotifier {
  Locale? _appLocale = const Locale('en');
  int _selectedTab = AppTab.audit;
  bool _initialized = false;
  final _appCache = AppCache();

  Locale get appLocale => _appLocale ?? const Locale("en");
  int get getSelectedTab => _selectedTab;
  bool get isInitialized => _initialized;

  static const supportedLanguage = [Locale('en', 'US'), Locale('km', 'KH')];

  void initializeApp() async {
    bool loggedIn = await isAuthenticated();
    if (loggedIn) {
      getIt<AppRouter>().push(const AdminLayoutRoute());
    } else {
      getIt<AppRouter>().push(LoginRoute());
    }

    Timer(const Duration(milliseconds: 2000), () {
      _initialized = true;
      notifyListeners();
    });
  }

  fetchLocale() async {
    var prefs = await SharedPreferences.getInstance();
    if (prefs.getString('language_code') == null) {
      _appLocale = const Locale('en');
      return Null;
    }
    _appLocale = Locale(prefs.getString('language_code').toString());
    return Null;
  }

  void changeLanguage(Locale type) async {
    // print("languageCode::${type.languageCode}");
    var prefs = await SharedPreferences.getInstance();
    globle.lang = type.languageCode;
    _appLocale = type;
    await prefs.setString('language_code', type.languageCode);
    await prefs.setString('countryCode', '');
    notifyListeners();
  }

  void goToTab(index) {
    _selectedTab = index;
    notifyListeners();
  }

  void login(dynamic request) async {
    var user = await AccountService().login(request);
    if (user != null) await _appCache.cacheUserToken(user.token);
    getIt<AppRouter>().push(const AdminLayoutRoute());
    notifyListeners();
  }

  void logout() async {
    _initialized = false;
    _selectedTab = 0;
    await _appCache.invalidate();
    initializeApp();
    getIt<AppRouter>().push(LoginRoute());
    notifyListeners();
  }

  Future<bool> isAuthenticated() async {
    return AccountService().isAuthenticated();
  }
}
