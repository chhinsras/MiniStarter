import 'dart:convert';
import 'package:hybrid/entities/entities.dart';
import 'package:hybrid/helpers/helpers.dart';
import 'package:hybrid/services/base_service.dart';

class AuditService extends BaseService {
  Future<List<Audit>> getAudits() async {
    var response = await agent.getAudits();
    var pagination = PaginationHelper.getPaginatedResponse(response);
    List<Audit> items = [];
    (jsonDecode(response.data.toString())).forEach((element) {
      items.add(Audit.fromJson(element));
    });
    PaginatedResponse paginatedResponse =
        PaginatedResponse(items: items, pagination: pagination!);
    for (Audit element in paginatedResponse.items) {
      print(element.toJson());
    }
    return items;
  }
}
