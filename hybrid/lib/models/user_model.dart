import 'package:hybrid/entities/entities.dart';
import 'package:hybrid/models/base_model.dart';
import 'package:hybrid/services/services.dart';

class UserModel extends BaseModel {
  List<User> users = [];
  UserParams params = UserParams(pageNumber: 1, pageSize: 10);

  PaginatedResponse<User> data = PaginatedResponse(
      items: [],
      pagination: Pagination(
          currentPage: 1, pageSize: 1, totalCount: 1, totalPages: 1));

  Future<PaginatedResponse<User>> loadUsers() async {
    data = await UserService().getAllUsers(params);
    return data;
  }

  User getUserById(int id) {
    return data.items.firstWhere((element) => element.id == id);
  }

  void setParams(UserParams params) {
    params = params;
  }
}
