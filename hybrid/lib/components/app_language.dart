import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:hybrid/extensions/extensions.dart';
import 'package:hybrid/helpers/helpers.dart';
import 'package:hybrid/models/models.dart';

class AppLanguage extends ConsumerWidget {
  const AppLanguage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final appManager = ref.watch(appModel);

    return Scaffold(
      appBar: AppBar(
        title: Text(context.localization.translate('app_title')),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Text(
              context.localization.translate('app_message'),
              style: const TextStyle(fontSize: 32),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                ElevatedButton(
                  onPressed: () {
                    appManager.changeLanguage(const Locale("en"));
                    Toastr.showSuccess(
                        text: context.localization
                            .translate('switch_language_en'));
                  },
                  child: const Text('English'),
                ),
                ElevatedButton(
                  onPressed: () {
                    appManager.changeLanguage(const Locale("km"));
                    Toastr.showSuccess(
                        text: context.localization
                            .translate('switch_language_km'));
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
