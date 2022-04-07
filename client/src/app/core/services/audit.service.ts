import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AgentApiService } from "../api/agent-api.service";
import { Audit } from "../../shared/models/audit";

@Injectable()
export class AuditService {
  constructor(private api: AgentApiService) {}

  getAudits = (): Observable<Audit[]> => this.api.getAudits().pipe(map((response: Audit[]) => response));
}
