import { Injectable } from '@angular/core';

import {HttpClient}from '@angular/common/http';

import{Observable} from 'rxjs';
import{OrderMission} from './mission.model';

const baseUrl='http://localhost:8089/api/v1/OrderMissions';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  [x: string]: any;
  constructor( private http:HttpClient) {}
  getAll(): Observable<OrderMission[]>{
    return this.http.get<OrderMission[]>(baseUrl);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/${id}`);
  }
  create(mission:any):Observable<any>{
    return this.http.post<any>(baseUrl,mission);
  }
  
  update(mission: OrderMission): Observable<OrderMission> {
    return this.http.put<OrderMission>(`${baseUrl}/${mission.id}`,mission);
  }
}
