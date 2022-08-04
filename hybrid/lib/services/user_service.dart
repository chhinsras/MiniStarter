import 'dart:convert';
import 'package:hybrid/entities/entities.dart';
import 'package:hybrid/helpers/helpers.dart';
import 'package:hybrid/services/base_service.dart';

class UserService extends BaseService {
  Future<PaginatedResponse<User>> getAllUsers(UserParams params) async {
    var response = await agent.getAllUsers(params.toJson());
    var pagination = PaginationHelper.getPaginatedResponse(response);
    List<User> items = [];
    jsonDecode(response.data.toString()).forEach((item) {
      items.add(User.fromJson(item));
    });
    PaginatedResponse<User> paginatedResponse =
        PaginatedResponse(items: items, pagination: pagination!);

    return paginatedResponse;
  }

  // Future<List<User>> getAllUsers() async {
  //   var response = await agent.getAllUsers();
  //   List<User> items = [];
  //   (jsonDecode(response.data.toString())).forEach((item) {
  //     items.add(User.fromJson(item));
  //   });
  //   return items;
  // }
}
