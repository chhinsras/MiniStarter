import 'dart:convert';
import 'package:hybrid/entities/entities.dart';
import 'package:hybrid/helpers/helpers.dart';
import 'package:hybrid/services/base_service.dart';

class UserService extends BaseService {
  Future<PaginatedResponse> getAllUsers() async {
    var response = await agent.getAllUsers();
    var pagination = PaginationHelper.getPaginatedResponse(response);
    List<User> items = [];
    (jsonDecode(response.data.toString())).forEach((item) {
      items.add(User.fromJson(item));
    });
    PaginatedResponse paginatedResponse =
        PaginatedResponse(items: items, pagination: pagination!);
    return paginatedResponse;
  }
}
