import 'package:flutter/material.dart' show BuildContext;
import '../helpers/app_localizations.dart';

extension Localization on BuildContext {
  AppLocalizations get localization => AppLocalizations.of(this);
}
