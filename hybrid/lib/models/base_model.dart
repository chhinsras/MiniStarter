import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:equatable/equatable.dart';
import 'package:hybrid/models/app_cache.dart';

abstract class BaseModel extends ChangeNotifier with EquatableMixin {
  final ref = ProviderContainer();
  final appCache = AppCache();
}
