import 'package:flutter/material.dart';
import '../models/models.dart';

class ProfileProvider extends ChangeNotifier {
  User get getUser => User(
      firstName: 'Sras',
      lastName: 'Chhin',
      imageUrl: 'assets/profile_pics/person_stef.jpeg',
      darkMode: _darkMode);

  bool get didSelectUser => _didSelectUser;
  bool get darkMode => _darkMode;

  var _didSelectUser = false;
  var _darkMode = true;

  set darkMode(bool darkMode) {
    _darkMode = darkMode;
    notifyListeners();
  }

  void tapOnProfile(bool selected) {
    _didSelectUser = selected;
    notifyListeners();
  }
}
