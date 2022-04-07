import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Agent } from "../api/agent";
import { Audit } from "../../shared/models/audit";

@Injectable()
export class AuditService {
  constructor(private agent: Agent) {}

  getAudits = (): Observable<Audit[]> => this.agent.getAudits().pipe(map((response: Audit[]) => response));
}
