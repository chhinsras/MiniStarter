import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:hybrid/models/account_model.dart';
import 'package:hybrid/models/audit_model.dart';
import 'profile_model.dart';
import 'app_model.dart';

final appModel = ChangeNotifierProvider<AppModel>((ref) => AppModel());
final accountModel =
    ChangeNotifierProvider<AccountModel>((ref) => AccountModel());
final profileModel =
    ChangeNotifierProvider<ProfileModel>((ref) => ProfileModel());
final auditModel = ChangeNotifierProvider<AuditModel>((ref) => AuditModel());
