import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Agent } from "../api/agent";
import { Audit, AuditParams } from "../../shared/models/audit";
import { HttpParams } from "@angular/common/http";
import { getPaginationHeaders } from "../helpers/pagination-helper";

@Injectable()
export class AuditService {
  params: AuditParams;

  constructor(private agent: Agent) {
    this.params = new AuditParams();
  }

  getParams = () => this.params;
  setParams = (params: AuditParams) => this.params = params;
  resetParams = () => this.params = new AuditParams();

  getPaged(){
    let params = new HttpParams();
    params = getPaginationHeaders(this.params.pageNumber, this.params.pageSize);
    // if (params.searchTerm) params = params.append('searchTerm', params.searchTerm);
    // if (params.orderBy) params = params.append('orderBy', params.orderBy.toString());
    return this.agent.getAudits(params).pipe(map(response => {return response;}));
  }
}
