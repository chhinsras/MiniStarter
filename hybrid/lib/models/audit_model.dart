import 'package:hybrid/entities/entities.dart';
import 'package:hybrid/models/base_model.dart';
import 'package:hybrid/services/audit_service.dart';

class AuditModel extends BaseModel {
  List<Audit> audits = [];

  Future<List<Audit>> loadAudits() async {
    return audits.isNotEmpty
        ? audits
        : audits = await AuditService().getAudits();
  }
}
