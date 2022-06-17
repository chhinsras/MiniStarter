import 'package:hybrid/models/base_model.dart';
import 'package:hybrid/services/services.dart';
import '../entities/entities.dart';

class UserModel extends BaseModel {
  Future<List<User>> loadAllUsers() async {
    return await UserService().getAllUsers();
  }
}
