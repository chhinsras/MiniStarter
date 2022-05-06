import 'package:dio/dio.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:hybrid/screens/screens.dart';
import 'config/config.dart';
import 'helpers/app_localizations.dart';
import 'providers/app_provider.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'providers/providers.dart';

void main() async {
  // Response response;
  // var dio = Dio();
  // dio.interceptors.add(InterceptorsWrapper(onRequest: (options, handler) {
  //   return handler.next(options);
  // }, onResponse: (response, handler) {
  //   // print(response);
  //   return handler.next(response);
  // }, onError: (DioError e, handler) {
  //   print(e.response!.statusMessage);
  //   return handler.next(e);
  // }));
  // response = await dio.get('https://localhost:5001/api/AuditLogs');R
  // print(response);

  runApp(ProviderScope(child: MyApp()));
}

class MyApp extends ConsumerWidget {
  const MyApp({Key? key}) : super(key: key);

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
    return MaterialApp(
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
      home: HomeScreen(title: appManager.appLocale.toString()),
    );
  }
}
