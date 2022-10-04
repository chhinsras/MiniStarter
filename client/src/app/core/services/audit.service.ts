import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Agent } from "../api/agent";
import { Audit, AuditParams } from "../../shared/models/audit";
import { HttpParams } from "@angular/common/http";
import { getPaginationHeaders } from "../helpers/pagination-helper";

@Injectable()
export class AuditService {
  auditParams: AuditParams;

  constructor(private agent: Agent) {
    this.auditParams = new AuditParams();
  }

  getAuditParams = () => this.auditParams;
  setAuditParams = (params: AuditParams) => this.auditParams = params;
  resetAuditParams = () => this.auditParams = new AuditParams();

  getAudits(){
    let params = new HttpParams();
    params = getPaginationHeaders(this.auditParams.pageNumber, this.auditParams.pageSize);
    // if (auditParams.searchTerm) params = params.append('searchTerm', auditParams.searchTerm);
    // if (auditParams.orderBy) params = params.append('orderBy', auditParams.orderBy.toString());
    return this.agent.getAudits(params).pipe(map(response => {return response;}));
  }
}
