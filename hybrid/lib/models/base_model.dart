import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:hybrid/models/app_cache.dart';

abstract class BaseModel extends ChangeNotifier {
  final ref = ProviderContainer();
  final appCache = AppCache();
}
