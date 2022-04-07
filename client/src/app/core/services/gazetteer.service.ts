import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AgentApiService } from '../api/agent-api.service';
import { Province } from '../../shared/models/province';

@Injectable()
export class GazetteerService {

  constructor(private api: AgentApiService) {}

  getAllProvinces(): Observable<Province[]> {
    return this.api
      .getAllProvinces()
      .pipe(map((response: Province[]) => response));
  }

  getProvinceByCode(code: number): Observable<Province> {
    return this.api.getProvince(code).pipe(map((response: Province) => response));
  }

  createProvince(province: Province): Observable<Province> {
    return this.api
      .createProvince(province)
      .pipe(map((response: Province) => response));
  }

  updateProvince(province: Province): Observable<Province> {
    return this.api
      .updateProvince(province)
      .pipe(map((response: Province) => response));
  }

  deleteProvince(code: number): Observable<string> {
    return this.api
      .deleteProvince(code)
      .pipe(map((response: string) => response));
  }
}
