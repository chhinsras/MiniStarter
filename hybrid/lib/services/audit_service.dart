import 'dart:convert';
import 'package:hybrid/entities/entities.dart';
import 'package:hybrid/services/base_service.dart';

class AuditService extends BaseService {
  Future<List<Audit>> getAudits() async {
    var response = await agent.getAudits();
    List<Audit> result = [];
    (jsonDecode(response.data.toString())).forEach((element) {
      result.add(Audit.fromJson(element));
    });
    return result;
  }
}
