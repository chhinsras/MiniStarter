import { RefreshTokenRequest } from '../../shared/models/account';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { getPaginatedResponse } from '../helpers/pagination-helper';
import { Login } from '../../shared/models/account';
import { Audit } from '../../shared/models/audit';
import { Commune } from '../../shared/models/commune';
import { District } from '../../shared/models/district';
import { Permission } from '../../shared/models/permission';
import { Province } from '../../shared/models/province';
import { Role } from '../../shared/models/role';
import { User, UserRole } from '../../shared/models/user';
import { Village } from '../../shared/models/village';

@Injectable({
  providedIn: 'root'
})
export class Agent {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  // Auditing
  getAudits = () => this.http.get<Audit[]>(this.baseUrl + 'auditlogs');

  // Account
  loginUser = (login: Login) => this.http.post(this.baseUrl + 'account/login', login);
  refreshToken = (request: RefreshTokenRequest) => this.http.post(this.baseUrl + 'account/refresh-token', request);
  registerUser = (user: User) => this.http.post(this.baseUrl + 'account/register', user);
  // confirmEmail = (params: HttpParams) => this.http.get(this.baseUrl + 'account/confirm-email', {params: params});
  // confirmPhoneNumber =(params: HttpParams) => this.http.get(this.baseUrl + 'account/confirm-phone-number', {params: params});
  // forgotPassword = (email: string) => this.http.post(this.baseUrl + 'account/forgot-password', email);
  // resetPassword = (resetPassword: ResetPassword) => this.http.post(this.baseUrl + 'account/reset-password', resetPassword);

  // User
  getUsers = (params: HttpParams) => getPaginatedResponse<User[]>(this.baseUrl + 'users', params, this.http);
  getUser = (id: string) => this.http.get<User>(this.baseUrl + 'users/' + id);
  createUser = (user: User) => this.http.post(this.baseUrl + 'users', user);
  updateUser = (user: User) => this.http.put(this.baseUrl + 'users', user);
  deleteUser = (id: string) => this.http.delete(this.baseUrl + 'users/' + id);
  getUserRoles = (id: string) => this.http.get(this.baseUrl + `users/${id}/roles`);
  assignUserRoles = (id: string, request: UserRole[]) => this.http.post(this.baseUrl + `users/${id}/roles`, {userRoles: request});

  // Role
  getRoles = (params: HttpParams) => this.http.get(this.baseUrl + 'roles', {params: params});
  getRole = (id: string) => this.http.get<Role>(this.baseUrl + `roles/${id}`);
  createRole = (role: Role) => this.http.post(this.baseUrl + 'roles', role);
  updateRole = (role: Role) => this.http.post(this.baseUrl + 'roles', role);
  deleteRole = (id: string) => this.http.delete(this.baseUrl + `roles/${id}`);
  getRolePermissions = (roleId: number) => this.http.get(this.baseUrl + `roles/permissions/byrole/${roleId}`);
  updateRolePermissions = (request: Permission) => this.http.put(this.baseUrl + 'roles/permissions/update', request);
  getAllClaims = () => this.http.get(this.baseUrl + `roles/permissions`)
  getClaim = (id: number) => this.http.get(this.baseUrl + `roles/permissions/${id}`);
  deleteClaim = (id: number) => this.http.delete(this.baseUrl + `roles/permissions/${id}`)

  // Gazetteer
  getAllProvinces = () => this.http.get(this.baseUrl + 'gazetteers/provinces');
  getProvince = (code: number) => this.http.get(this.baseUrl + `gazetteers/provinces/${code}`);
  createProvince = (province: Province) => this.http.post(this.baseUrl + 'gazetteers/provinces', province);
  updateProvince = (province: Province) => this.http.put(this.baseUrl + 'gazetteers/provinces', province);
  deleteProvince = (code: number) => this.http.delete(this.baseUrl + `gazetteers/provinces/${code}`);
  getAllDistricts = () => this.http.get(this.baseUrl + 'gazetteers/districts');
  getDistrictsByProvince = (provinceCode: number) => this.http.get(this.baseUrl + `gazetteers/districts/byProvince/${provinceCode}`);
  getDistrict = (code: number) => this.http.get(this.baseUrl + `gazetteers/districts/${code}`);
  createDistrict = (district: District) => this.http.post(this.baseUrl + 'gazetteers/districts', district);
  updateDistrict = (district: District) => this.http.put(this.baseUrl + 'gazetteers/districts', district);
  deleteDistrict = (code: number) => this.http.delete(this.baseUrl + `gazetteers/districts/${code}`);
  getAllCommunes = () => this.http.get(this.baseUrl + 'gazetteers/communes');
  getCommunesByDistrict = (provinceCode: number) => this.http.get(this.baseUrl + `gazetteers/communes/byDistrict/${provinceCode}`);
  getCommune = (code: number) => this.http.get(this.baseUrl + `gazetteers/communes/${code}`);
  createCommune = (commune: Commune) => this.http.post(this.baseUrl + 'gazetteers/communes', commune);
  updateCommune = (commune: Commune) => this.http.put(this.baseUrl + 'gazetteers/communes', commune);
  deleteCommune = (code: number) => this.http.delete(this.baseUrl + `gazetteers/communes/${code}`);
  getAllVillages = () => this.http.get(this.baseUrl + 'gazetteers/villages');
  getVillagesByCommune = (provinceCode: number) => this.http.get(this.baseUrl + `gazetteers/villages/byCommune/${provinceCode}`);
  getVillage = (code: number) => this.http.get(this.baseUrl + `gazetteers/villages/${code}`);
  createVillage = (village: Village) => this.http.post(this.baseUrl + 'gazetteers/villages', village);
  updateVillage = (village: Village) => this.http.put(this.baseUrl + 'gazetteers/villages', village);
  deleteVillage = (code: number) => this.http.delete(this.baseUrl + `gazetteers/villages/${code}`);

}
