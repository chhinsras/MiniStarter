import 'package:flutter/material.dart' show BuildContext;
import '../helpers/app_localizations.dart';

extension Localization on BuildContext {
  AppLocalizations get i18n => AppLocalizations.of(this);
}
