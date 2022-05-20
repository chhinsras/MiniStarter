import 'dart:convert';
import '../api/agent.dart';
import '../models/models.dart';

class AuditService {
  final agent = Agent();

  Future<List<Audit>> getAudits() async {
    var response = await agent.getAudits();
    List<Audit> result = [];
    (jsonDecode(response.data.toString())).forEach((element) {
      result.add(Audit.fromJson(element));
    });
    return result;
  }
}
