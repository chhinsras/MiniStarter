import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Agent } from '../api/agent';
import { Commune, District, Province, Village } from '../../shared/models/gazetteer';

@Injectable()
export class GazetteerService {

  constructor(private agent: Agent) {}

  getStats = (): Observable<any>  => this.agent.getGazetteerStats().pipe(map((response => response)));

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

  getDistrictsByProvince = (provinceCode: number): Observable<District[]>  =>
    this.agent.getDistrictsByProvince(provinceCode).pipe(map((response: District[]) => response));

  getCommunesByDistrict = (districtCode: number): Observable<Commune[]> =>
    this.agent.getCommunesByDistrict(districtCode).pipe(map((response: Commune[]) => response));

  getVillagesByDistrict = (communeCode: number): Observable<Village[]> =>
  this.agent.getVillagesByCommune(communeCode).pipe(map((response: Village[]) => response));

}
