import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AgentApiService } from '../api/agent-api.service';
import { getPaginatedResponse, getPaginationHeaders } from '../helpers/paginationHelper';
import { Permission } from '../../shared/models/permission';
import { Role, RoleParams } from '../../shared/models/role';

@Injectable()
export class RoleService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private api: AgentApiService) {}

  getRoles(roleParams: RoleParams){
    let params = new HttpParams();
    if (roleParams.searchString) params = params.append('searchString', roleParams.searchString);
    if (roleParams.orderBy) params = params.append('orderBy', roleParams.orderBy.toString());
    params = getPaginationHeaders(roleParams.pageNumber, roleParams.pageSize);

    return getPaginatedResponse<Role[]>(this.baseUrl + 'roles', params, this.http)
      .pipe(map(response => {
        return response;
      }))
  }

  getRoleById(id: string): Observable<Role> {
    return this.api.getRole(id).pipe(map((response: Role) => response));
  }

  createRole(Role: Role): Observable<Role> {
    return this.api
      .createRole(Role)
      .pipe(map((response: Role) => response));
  }

  updateRole(Role: Role): Observable<Role> {
    return this.api
      .updateRole(Role)
      .pipe(map((response: Role) => response));
  }

  deleteRole(id: string): Observable<string> {
    return this.api
      .deleteRole(id)
      .pipe(map((response: string) => response));
  }

  getRolePermissionsByRoleId(roleId: number) {
    return this.api
      .getRolePermissions(roleId)
      .pipe(map((response: Permission) => response));
  }

  updateRolePermissions(request: Permission): Observable<string> {
    return this.api
      .updateRolePermissions(request)
      .pipe(map((response: string) => response));
  }

  getAllClaims() {}

  getClaimById(id: number) {}

  deleteClaimById(id: number) {}
}
