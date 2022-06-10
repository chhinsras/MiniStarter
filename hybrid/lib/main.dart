import 'package:auto_route/auto_route.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:hybrid/models/app_model.dart';
import 'package:hybrid/models/models.dart';
import 'package:hybrid/routes/app_router.dart';
import 'config/config.dart';
import 'helpers/helpers.dart';
import 'routes/auth_guard.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:bot_toast/bot_toast.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await dotenv.load(fileName: ".env");

  final container = ProviderContainer();
  container.read(appModel).initializeApp();

  getIt.registerSingleton<AppRouter>(
      AppRouter(authGuard: AuthGuard(container: container)));
  runApp(ProviderScope(observers: [Logger()], child: const MyApp()));
}

class MyApp extends ConsumerWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final appRouter = getIt<AppRouter>();
    final appManager = ref.watch(appModel);
    final profileManager = ref.watch(profileModel);

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
        supportedLocales: AppModel.supportedLanguage,
        localizationsDelegates: const [
          AppLocalizations.delegate,
          GlobalMaterialLocalizations.delegate,
          GlobalWidgetsLocalizations.delegate,
          GlobalCupertinoLocalizations.delegate,
          DefaultCupertinoLocalizations.delegate,
        ],
        builder: BotToastInit(),
        routerDelegate: AutoRouterDelegate(appRouter,
            navigatorObservers: () => [BotToastNavigatorObserver()]),
        routeInformationParser: appRouter.defaultRouteParser(),
        backButtonDispatcher: RootBackButtonDispatcher(),
      ),
    );
  }
}
