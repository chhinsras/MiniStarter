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

  getAllProvinces = (): Observable<Province[]> =>
    this.agent.getAllProvinces().pipe(map((response: Province[]) => response));

  getProvinceByCode = (code: number): Observable<Province> =>
    this.agent.getProvince(code).pipe(map((response: Province) => response));

  createProvince = (province: Province): Observable<Province> =>
    this.agent.createProvince(province).pipe(map((response: Province) => response));

  updateProvince = (province: Province): Observable<Province> =>
    this.agent.updateProvince(province).pipe(map((response: Province) => response));

  deleteProvince = (code: number): Observable<string> =>
    this.agent.deleteProvince(code).pipe(map((response: string) => response));

  getDistrictsByProvince = (provinceCode: number): Observable<District[]>  =>
    this.agent.getDistrictsByProvince(provinceCode).pipe(map((response: District[]) => response));

  createDistrict = (district: District): Observable<District> =>
    this.agent.createDistrict(district).pipe(map((response: District) => response));

  updateDistrict = (district: District): Observable<District> =>
    this.agent.updateDistrict(district).pipe(map((response: District) => response));

  deleteDistrict = (code: number): Observable<string> =>
    this.agent.deleteDistrict(code).pipe(map((response: string) => response));

  getCommunesByDistrict = (districtCode: number): Observable<Commune[]> =>
    this.agent.getCommunesByDistrict(districtCode).pipe(map((response: Commune[]) => response));

  createCommune = (commune: Commune): Observable<Commune> =>
    this.agent.createCommune(commune).pipe(map((response: Commune) => response));

  updateCommune = (commune: Commune): Observable<Commune> =>
    this.agent.updateCommune(commune).pipe(map((response: Commune) => response));

  deleteCommune = (code: number): Observable<string> =>
    this.agent.deleteCommune(code).pipe(map((response: string) => response));

  getVillagesByDistrict = (communeCode: number): Observable<Village[]> =>
  this.agent.getVillagesByCommune(communeCode).pipe(map((response: Village[]) => response));

  createVillage = (village: Village): Observable<Village> =>
    this.agent.createVillage(village).pipe(map((response: Village) => response));

  updateVillage = (village: Village): Observable<Village> =>
    this.agent.updateVillage(village).pipe(map((response: Village) => response));

  deleteVillage = (code: number): Observable<string> =>
    this.agent.deleteVillage(code).pipe(map((response: string) => response));
}
