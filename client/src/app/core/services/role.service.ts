import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Agent } from '../api/agent';
import { getPaginatedResponse, getPaginationHeaders } from '../helpers/pagination-helper';
import { Permission } from '../../shared/models/permission';
import { Role } from '../../shared/models/role';

@Injectable()
export class RoleService {
  baseUrl = environment.apiUrl;
  // roleParams: RoleParams;

  constructor(private http: HttpClient, private agent: Agent) {
  }


  getRoles(){
    return this.agent.getRoles()
      .pipe(map(response => {
        return response;
      }));
  }

  getRoleById(id: string): Observable<Role> {
    return this.agent.getRole(id).pipe(map((response: Role) => response));
  }

  createRole(role: Role): Observable<Role> {
    return this.agent
      .createRole(role)
      .pipe(map((response: Role) => response));
  }

  updateRole(Role: Role): Observable<Role> {
    return this.agent
      .updateRole(Role)
      .pipe(map((response: Role) => response));
  }

  deleteRole(id: string): Observable<string> {
    return this.agent
      .deleteRole(id)
      .pipe(map((response: string) => response));
  }

  getAllPermissions() {
    return this.agent.getAllPermissions().pipe(map((response: string[]) => response));
  }

  getRolePermissionsByRoleId(roleId: number) {
    return this.agent
      .getRolePermissions(roleId)
      .pipe(map((response: Permission) => response));
  }

  updateRolePermissions(request: Permission): Observable<string> {
    return this.agent
      .updateRolePermissions(request)
      .pipe(map((response: string) => response));
  }

  getAllClaims() {}

  getClaimById(id: number) {}

  deleteClaimById(id: number) {}
}
