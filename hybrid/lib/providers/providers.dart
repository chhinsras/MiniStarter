import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'profile_provider.dart';
import 'app_provider.dart';

final appProvider = ChangeNotifierProvider<AppProvider>((ref) => AppProvider());
final profileProvider = ChangeNotifierProvider<ProfileProvider>((ref) {
  return ProfileProvider();
});
