import 'dart:async';
import 'package:flutter/material.dart';
import 'package:hybrid/config/config.dart';
import 'package:hybrid/models/base_model.dart';
import 'package:hybrid/models/models.dart';
import 'package:hybrid/routes/app_router.dart';
import 'package:hybrid/config/globals.dart' as globle;

class AppTab {
  static const int dashboard = 0;
  static const int gazetteer = 1;
  static const int user = 2;
  static const int role = 3;
  static const int audit = 4;
}

class AppModel extends BaseModel {
  Locale? _appLocale = const Locale('en');
  int _selectedTab = AppTab.audit;
  bool _initialized = false;

  Locale get appLocale => _appLocale ?? const Locale("en");
  int get getSelectedTab => _selectedTab;
  bool get isInitialized => _initialized;

  static const supportedLanguage = [Locale('en', 'US'), Locale('km', 'KH')];

  void initializeApp() async {
    bool loggedIn = await ref.read(accountModel).isAuthenticated();
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

  reInitializeApp() async {
    _initialized = false;
    _selectedTab = 0;
    initializeApp();
    notifyListeners();
  }

  fetchLocale() async {
    final languageCode = await appCache.getLanguageCode();
    if (languageCode == null) {
      _appLocale = const Locale('en');
      return Null;
    }
    _appLocale = Locale(languageCode);
    return Null;
  }

  void changeLanguage(Locale type) async {
    // print("languageCode::${type.languageCode}");
    globle.lang = type.languageCode;
    _appLocale = type;
    appCache.cacheLanguageCode(type.languageCode);
    appCache.cacheCountryCode(type.countryCode);
    notifyListeners();
  }

  void goToTab(index) {
    _selectedTab = index;
    notifyListeners();
  }
}
