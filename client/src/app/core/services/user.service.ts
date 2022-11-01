import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Agent } from '../api/agent';
import { getPaginationHeaders } from '../helpers/pagination-helper';
import { User, UserParams, UserRole } from '../../shared/models/user';
import { Upload } from 'src/app/shared/models/upload';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

@Injectable()
export class UserService {
  baseUrl = environment.apiUrl;
  hubUrl = environment.hubUrl;

  private hubConnection: HubConnection

  params: UserParams;

  private userOnlineCountSource = new BehaviorSubject<number>(0);
  public userOnlineCount$ = this.userOnlineCountSource.asObservable();

  constructor(private agent: Agent, private localStorageService: LocalStorageService) {
    this.params = new UserParams();
  }

  getParams = () => this.params;
  setUserParams = (params: UserParams) => this.params = params;
  resetUserParams = () => this.params = new UserParams();


  createHubConnection() {
    var accessToken = this.localStorageService.getItem('token') ?? null;
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.hubUrl + 'onlineusercount', {
        accessTokenFactory: () => accessToken
      })
      .withAutomaticReconnect()
      .build();

    this.hubConnection
      .start()
      .catch(error => console.log(error));

    this.hubConnection.on('UpdateOnlineCount', userOnlineCount => {
      this.userOnlineCount$ = userOnlineCount;
      console.log(userOnlineCount);
    });
  }

  stopHubConnection() {
    this.hubConnection
      .start()
      .catch(error => console.log(error));
  }

  getPaged(){
    let params = new HttpParams();
    params = getPaginationHeaders(this.params.pageNumber, this.params.pageSize);
    if (this.params.searchTerm) params = params.append('searchTerm', this.params.searchTerm);
    if (this.params.orderBy) params = params.append('orderBy', this.params.orderBy.toString());
    return this.agent.getUsers(params).pipe(map(response => response));
  }

  getById = (id: string): Observable<User> => this.agent.getUser(id).pipe(map((response: User) => response));
  create = (user: User): Observable<User> => this.agent.createUser(user).pipe(map((response: User) => response));
  update = (User: User): Observable<string> => this.agent.updateUser(User).pipe(map((response: string) => response));
  delete = (id: string): Observable<string> => this.agent.deleteUser(id).pipe(map((response: string) => response));

  getUserRoles = (id: string): Observable<UserRole[]> => this.agent.getUserRoles(id)
    .pipe(map((response: UserRole[]) => response));

  assignUserRoles = (id: string, request: UserRole[]): Observable<string> => this.agent.assignUserRoles(id, request)
    .pipe(map((response: string) => response));

  updatePhoto(upload: Upload) {
    var formData = new FormData();
    formData.append('file', upload.file);
    formData.append('uploadType', upload.uploadType.toString());
    return this.agent.updateUserPhoto(formData);
  }
}
