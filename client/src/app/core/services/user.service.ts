import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AgentApiService } from '../api/agent-api.service';
import { getPaginatedResult, getPaginationHeaders } from '../helpers/paginationHelper';
import { User, UserParams, UserRole } from '../models/user';

@Injectable()
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private api: AgentApiService) {}

  getRoles(userParams: UserParams){
    let params = new HttpParams();
    if (userParams.searchString) params = params.append('searchString', userParams.searchString);
    if (userParams.orderBy) params = params.append('orderBy', userParams.orderBy.toString());
    params = getPaginationHeaders(userParams.pageNumber, userParams.pageSize);

    return getPaginatedResult<User[]>(this.baseUrl + 'roles', params, this.http)
      .pipe(map(response => {
        return response;
      }))
  }

  getUserById(id: string): Observable<User> {
    return this.api.getUser(id).pipe(map((response: User) => response));
  }

  updateUser(User: User): Observable<User> {
    return this.api
      .updateUser(User)
      .pipe(map((response: User) => response));
  }

  deleteUser(id: string): Observable<string> {
    return this.api
      .deleteUser(id)
      .pipe(map((response: string) => response));
  }

  getUserRoles(id: string): Observable<UserRole> {
    return this.api
      .getUserRoles(id)
      .pipe(map((response: UserRole) => response));
  }

  updateUserRoles(id: string, request: UserRole): Observable<string> {
    return this.api
      .updateUserRoles(id, request)
      .pipe(map((response: string) => response));
  }
}
