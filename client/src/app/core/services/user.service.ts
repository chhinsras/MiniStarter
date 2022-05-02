import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Agent } from '../api/agent';
import { getPaginationHeaders } from '../helpers/pagination-helper';
import { User, UserParams, UserRole } from '../../shared/models/user';

@Injectable()
export class UserService {
  baseUrl = environment.apiUrl;
  userParams: UserParams;

  constructor(private agent: Agent) {
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
    params = getPaginationHeaders(userParams.pageNumber, userParams.pageSize);
    if (userParams.searchTerm) params = params.append('searchTerm', userParams.searchTerm);
    if (userParams.orderBy) params = params.append('orderBy', userParams.orderBy.toString());
    return this.agent.getUsers(params)
      .pipe(map(response => {
        return response;
      }));
  }

  getUserById(id: string): Observable<User> {
    return this.agent.getUser(id).pipe(map((response: User) => response));
  }

  updateUser(User: User): Observable<string> {
    return this.agent
      .updateUser(User)
      .pipe(map((response: string) => response));
  }

  deleteUser(id: string): Observable<string> {
    return this.agent
      .deleteUser(id)
      .pipe(map((response: string) => response));
  }

  getUserRoles(id: string): Observable<UserRole[]> {
    return this.agent
      .getUserRoles(id)
      .pipe(map((response: UserRole[]) => response));
  }

  assignUserRoles(id: string, request: UserRole[]): Observable<string> {
    return this.agent
      .assignUserRoles(id, request)
      .pipe(map((response: string) => response));
  }
}
