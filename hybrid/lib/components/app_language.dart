import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:hybrid/providers/app_provider.dart';

import '../helpers/app_localizations.dart';

class AppLanguage extends ConsumerWidget {
  final _appProvider = ChangeNotifierProvider<AppProvider>((ref) {
    return AppProvider();
  });

  AppLanguage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final appProvider = ref.watch(_appProvider);

    return Scaffold(
      appBar: AppBar(
        title: Text(AppLocalizations.of(context).translate('app_title')),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Text(
              AppLocalizations.of(context).translate('app_message'),
              style: const TextStyle(fontSize: 32),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                ElevatedButton(
                  onPressed: () {
                    appProvider.changeLanguage(const Locale("en"));
                  },
                  child: const Text('English'),
                ),
                ElevatedButton(
                  onPressed: () {
                    appProvider.changeLanguage(const Locale("km"));
                  },
                  child: const Text('Khmer'),
                )
              ],
            ),
          ],
        ),
      ),
    );
  }
}
