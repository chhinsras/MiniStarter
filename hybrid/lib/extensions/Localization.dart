import 'package:flutter/material.dart' show BuildContext;
import 'package:hybrid/helpers/helpers.dart';

extension Localization on BuildContext {
  AppLocalizations get localization => AppLocalizations.of(this);
}
