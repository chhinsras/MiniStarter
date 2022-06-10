import 'package:hybrid/entities/entities.dart';
import 'package:hybrid/models/base_model.dart';

class ProfileModel extends BaseModel {
  User get getUser => User(
      userName: 'chhinsras',
      firstName: 'Sras',
      lastName: 'Chhin',
      imageUrl: 'assets/profile_pics/person_stef.jpeg',
      darkMode: _darkMode,
      isActive: true);

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
