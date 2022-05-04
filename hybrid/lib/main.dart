import 'package:flutter/material.dart';
import 'package:hybrid/providers/profile_provider.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:hybrid/screens/screens.dart';
import 'config/config.dart';

void main() {
  runApp(ProviderScope(child: MyApp()));
}

class MyApp extends ConsumerWidget {
  MyApp({Key? key}) : super(key: key);

  final profileProvider = ChangeNotifierProvider<ProfileProvider>((ref) {
    return ProfileProvider();
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    ProfileProvider profileManager = ref.watch(profileProvider);
    ThemeData theme;
    if (profileManager.darkMode) {
      theme = AppTheme.dark();
    } else {
      theme = AppTheme.light();
    }
    return MaterialApp(
      title: 'Mini Starter',
      theme: theme,
      home: const HomeScreen(title: 'Mini Starter'),
    );
  }
}
