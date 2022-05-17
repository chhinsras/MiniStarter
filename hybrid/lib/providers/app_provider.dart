import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../config/globals.dart' as _globle;

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

  Locale get appLocale => _appLocale ?? const Locale("en");
  int get getSelectedTab => _selectedTab;

  static const supportedLanguage = [Locale('en', 'US'), Locale('km', 'KH')];

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
    _globle.lang = type.languageCode;
    _appLocale = type;
    await prefs.setString('language_code', type.languageCode);
    await prefs.setString('countryCode', '');
    notifyListeners();
  }

  void goToTab(index) {
    _selectedTab = index;
    notifyListeners();
  }
}
