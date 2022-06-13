import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:hybrid/extensions/extensions.dart';
import 'package:hybrid/helpers/helpers.dart';
import 'package:hybrid/models/models.dart';
import 'package:hybrid/routes/app_router.dart';

class DashboardPage extends ConsumerWidget {
  const DashboardPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Column(
      children: [
        Column(
          children: [
            const Center(
              child: Text('Dashboard Page'),
            ),
            MaterialButton(
              onPressed: () => context.router.navigate(AuditRoute()),
              child: const Text('Go To Changelogs'),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                ElevatedButton(
                  onPressed: () {
                    ref.watch(appModel).changeLanguage(const Locale("en"));
                    Toastr.showSuccess(
                        text: context.localization
                            .translate('switch_language_en'));
                  },
                  child: const Text('English'),
                ),
                ElevatedButton(
                  onPressed: () {
                    ref.watch(appModel).changeLanguage(const Locale("km"));
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
