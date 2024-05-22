import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';

import{Observable} from 'rxjs';
import{Chauffeur} from './chauffeur.model';

const baseUrl='http://localhost:8087/api/v1/chauffeurs';


@Injectable({
  providedIn: 'root'
})
export class ChauffeurService {
  [x: string]: any;

 
  constructor( private http:HttpClient) {}
  getAll(): Observable<Chauffeur[]>{
    return this.http.get<Chauffeur[]>(baseUrl);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/${id}`);
  }
  create(Chauffeur:any):Observable<any>{
    return this.http.post<any>(baseUrl,Chauffeur);
  }
  
  update(chauffeur: Chauffeur): Observable<Chauffeur> {
    return this.http.put<Chauffeur>(`${baseUrl}/${chauffeur.id}`, chauffeur);
  }
}
