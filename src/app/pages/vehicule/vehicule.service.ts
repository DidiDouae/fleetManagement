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
}
