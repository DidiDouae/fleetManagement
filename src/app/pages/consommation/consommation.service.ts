import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarburantAnnuel } from './consommation.model';
import { Observable } from 'rxjs';
const baseUrl='http://localhost:8089/api/v1/carburant';

@Injectable({
  providedIn: 'root'
})
export class ConsommationService {

  [x: string]: any;

 
  constructor( private http:HttpClient) {}
  getAll(): Observable<CarburantAnnuel[]>{
    return this.http.get<CarburantAnnuel[]>(baseUrl);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/${id}`);
  }
  create(carburant:any):Observable<any>{
    return this.http.post<any>(baseUrl,carburant);
  }
  
  update(carburantAnnuel: CarburantAnnuel): Observable<CarburantAnnuel> {
    return this.http.put<CarburantAnnuel>(`${baseUrl}/${carburantAnnuel.id}`, CarburantAnnuel);
}

carburantrestant(): Observable<any> {
  return this.http.get<number>(`${baseUrl}/carburant-restant`);
}
}
