import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:hybrid/extensions/extensions.dart';
import '../../helpers/helpers.dart';
import '../../providers/providers.dart';

class DashboardPage extends ConsumerWidget {
  const DashboardPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final appManager = ref.watch(appProvider);
    return Column(
      children: [
        Column(
          children: [
            const Center(
              child: Text('Dashboard Page'),
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
      ],
    );
  }
}
