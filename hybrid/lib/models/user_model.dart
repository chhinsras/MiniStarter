import 'package:hybrid/models/base_model.dart';
import 'package:hybrid/services/services.dart';
import '../entities/entities.dart';

class UserModel extends BaseModel {
  List<User> users = [];

  Future<List<User>> loadUsers() async {
    return users.isNotEmpty ? users : users = await UserService().getAllUsers();
  }

  User getUserById(int id) {
    return users.firstWhere((element) => element.id == id);
  }
}
