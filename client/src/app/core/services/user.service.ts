import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AgentApiService } from '../api/agent-api.service';
import { getPaginationHeaders } from '../helpers/paginationHelper';
import { User, UserParams, UserRole } from '../../shared/models/user';

@Injectable()
export class UserService {
  baseUrl = environment.apiUrl;
  userParams: UserParams;

  constructor(private api: AgentApiService) {
    this.userParams = new UserParams();
  }

  getUserParams() {
    return this.userParams;
  }

  setUserParams(params: UserParams) {
    this.userParams = params;
  }

  resetUserParams() {
    this.userParams = new UserParams();
    return this.userParams;
  }

  getUsers(userParams: UserParams){
    let params = new HttpParams();
    if (userParams.searchString) params = params.append('searchString', userParams.searchString);
    if (userParams.orderBy) params = params.append('orderBy', userParams.orderBy.toString());
    params = getPaginationHeaders(userParams.pageNumber, userParams.pageSize);

    return this.api.getUsers(params)
      .pipe(map(response => {
        console.log(response);
        return response;
      }));
  }

  getUserById(id: string): Observable<User> {
    return this.api.getUser(id).pipe(map((response: User) => response));
  }

  updateUser(User: User): Observable<string> {
    return this.api
      .updateUser(User)
      .pipe(map((response: string) => response));
  }

  deleteUser(id: string): Observable<string> {
    return this.api
      .deleteUser(id)
      .pipe(map((response: string) => response));
  }

  getUserRoles(id: string): Observable<UserRole[]> {
    return this.api
      .getUserRoles(id)
      .pipe(map((response: UserRole[]) => response));
  }

  assignUserRoles(id: string, request: UserRole[]): Observable<string> {
    return this.api
      .assignUserRoles(id, request)
      .pipe(map((response: string) => response));
  }
}
