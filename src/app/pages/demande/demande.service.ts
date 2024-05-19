import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemandeReparations } from './demande.model';

const baseUrl='http://localhost:8089/api/v1/DemandeReparations';
@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  [x: string]: any;

 
  constructor( private http:HttpClient) {}
  getAll(): Observable<DemandeReparations[]>{
    return this.http.get<DemandeReparations[]>(baseUrl);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/${id}`);
  }
  create(DemandeReparations:any):Observable<any>{
    return this.http.post<any>(baseUrl,DemandeReparations);
  }
  
  update(DemandeReparations: DemandeReparations): Observable<DemandeReparations> {
    return this.http.put<DemandeReparations>(`${baseUrl}/${DemandeReparations.id}`, DemandeReparations);
  }

}
