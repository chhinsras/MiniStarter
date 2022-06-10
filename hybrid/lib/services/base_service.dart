import 'package:hybrid/api/agent.dart';
import 'package:hybrid/models/app_model.dart';
import 'package:hybrid/models/profile_model.dart';

abstract class BaseService {
  final Agent agent = Agent();

  final AppModel appModel = AppModel();
  final ProfileModel profileModel = ProfileModel();
}
