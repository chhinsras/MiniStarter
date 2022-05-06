import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../helpers/app_localizations.dart';
import '../providers/providers.dart';

class AppLanguage extends ConsumerWidget {
  const AppLanguage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final appManager = ref.watch(appProvider);

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
                    appManager.changeLanguage(const Locale("en"));
                  },
                  child: const Text('Englissh'),
                ),
                ElevatedButton(
                  onPressed: () {
                    appManager.changeLanguage(const Locale("km"));
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
