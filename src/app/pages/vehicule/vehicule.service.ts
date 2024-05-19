import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import{Observable} from 'rxjs';
import{Vehicule} from './vehicule.model';


const baseUrl='http://localhost:8089/api/v1/vehicules';
@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor( private http:HttpClient) {}
  getAll(): Observable<Vehicule[]>{
    return this.http.get<Vehicule[]>(baseUrl);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/${id}`);
  }
  create(Vehicule:any):Observable<any>{
    return this.http.post<any>(baseUrl,Vehicule);
  }
  update(Vehicule:any): Observable<Vehicule> {
    return this.http.put<Vehicule>(`${baseUrl}/${Vehicule.id}`, Vehicule);
  }
  
  
  
}
