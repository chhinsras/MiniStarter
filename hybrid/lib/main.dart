import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'config/config.dart';
import 'helpers/app_localizations.dart';
import 'providers/app_provider.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'providers/providers.dart';

void main() async {
  runApp(ProviderScope(child: MyApp()));
}

class MyApp extends ConsumerWidget {
  MyApp({Key? key}) : super(key: key);
  final _appRouter = AppRouter();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final appManager = ref.watch(appProvider);
    final profileManager = ref.watch(profileProvider);

    ThemeData theme;
    if (profileManager.darkMode) {
      theme = AppTheme.dark();
    } else {
      theme = AppTheme.light();
    }

    return FutureBuilder(
      future: appManager.fetchLocale(),
      builder: (context, snapshot) => MaterialApp.router(
        title: 'Mini Starter',
        theme: theme,
        locale: appManager.appLocale,
        supportedLocales: AppProvider.supportedLanguage,
        localizationsDelegates: const [
          AppLocalizations.delegate,
          GlobalMaterialLocalizations.delegate,
          GlobalWidgetsLocalizations.delegate,
          GlobalCupertinoLocalizations.delegate,
          DefaultCupertinoLocalizations.delegate,
        ],
        routerDelegate: _appRouter.delegate(),
        routeInformationParser: _appRouter.defaultRouteParser(),
      ),
    );
  }
}
