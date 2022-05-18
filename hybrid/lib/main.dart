import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:hybrid/router/routes.dart';
import 'config/config.dart';
import 'helpers/app_localizations.dart';
import 'providers/app_provider.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'providers/providers.dart';
import 'package:bot_toast/bot_toast.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

Future main() async {
  await dotenv.load(fileName: ".env");
  runApp(ProviderScope(child: MyApp()));
}

class MyApp extends ConsumerWidget {
  MyApp({Key? key}) : super(key: key);

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
        debugShowCheckedModeBanner: false,
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
        builder: BotToastInit(),
        routerDelegate: appRouter.routerDelegate,
        routeInformationParser: appRouter.routeInformationParser,
      ),
    );
  }
}
