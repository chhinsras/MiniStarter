import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'profile_model.dart';
import 'app_model.dart';

final appModel = ChangeNotifierProvider<AppModel>((ref) => AppModel());
final profileModel = ChangeNotifierProvider<ProfileModel>((ref) {
  return ProfileModel();
});
