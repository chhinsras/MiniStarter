import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:hybrid/models/account_model.dart';
import 'profile_model.dart';
import 'app_model.dart';

final appModel = ChangeNotifierProvider<AppModel>((ref) => AppModel());
final accountModel = ChangeNotifierProvider<AccountModel>((ref) {
  return AccountModel();
});
final profileModel = ChangeNotifierProvider<ProfileModel>((ref) {
  return ProfileModel();
});
