import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Agent } from '../api/agent';
import { Province } from '../../shared/models/province';

@Injectable()
export class GazetteerService {

  constructor(private agent: Agent) {}

  getAllProvinces(): Observable<Province[]> {
    return this.agent
      .getAllProvinces()
      .pipe(map((response: Province[]) => response));
  }

  getProvinceByCode(code: number): Observable<Province> {
    return this.agent.getProvince(code).pipe(map((response: Province) => response));
  }

  createProvince(province: Province): Observable<Province> {
    return this.agent
      .createProvince(province)
      .pipe(map((response: Province) => response));
  }

  updateProvince(province: Province): Observable<Province> {
    return this.agent
      .updateProvince(province)
      .pipe(map((response: Province) => response));
  }

  deleteProvince(code: number): Observable<string> {
    return this.agent
      .deleteProvince(code)
      .pipe(map((response: string) => response));
  }
}
