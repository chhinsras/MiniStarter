import 'dart:convert';
import 'package:hybrid/entities/entities.dart';
import 'package:hybrid/services/base_service.dart';

class UserService extends BaseService {
  Future<List<User>> getAllUsers() async {
    var response = await agent.getAllUsers();
    List<User> users = [];
    (jsonDecode(response.data.toString())).forEach((element) {
      users.add(User.fromJson(element));
    });
    return users;
  }
}
