import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Piece } from './piece.model';
import { Observable } from 'rxjs';
const baseUrl='http://localhost:8089/api/v1/pieces';

@Injectable({
  providedIn: 'root'
})
export class PieceService {

  [x: string]: any;

 
  constructor( private http:HttpClient) {}
  getAll(): Observable<Piece[]>{
    return this.http.get<Piece[]>(baseUrl);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/${id}`);
  }
  create(piece:any):Observable<any>{
    return this.http.post<any>(baseUrl,piece);
  }
  
  update(piece: Piece): Observable<Piece> {
    return this.http.put<Piece>(`${baseUrl}/${piece.idPiece}`, Piece);
}

}
