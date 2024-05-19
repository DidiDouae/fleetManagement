import { Injectable } from '@angular/core';

import {HttpClient}from '@angular/common/http';
import{Observable} from 'rxjs';
import{OrderPaiment} from './paiement.model';
///heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerrrrrrrrrrrrrreeeeeeeeeeeeeee
const baseUrl='http://localhost:8089/api/v1/OrderPaiments';
@Injectable({
  providedIn: 'root'
})
export class PaiementService {

    [x: string]: any;

 
    constructor( private http:HttpClient) {}
    getAll(): Observable<OrderPaiment[]>{
      return this.http.get<OrderPaiment[]>(baseUrl);
    }
    delete(id: number): Observable<void> {
      return this.http.delete<void>(`${baseUrl}/${id}`);
    }
    create(OrderPaiment:any):Observable<any>{
      return this.http.post<any>(baseUrl,OrderPaiment);
    }
    
    update(OrderPaiment: OrderPaiment): Observable<OrderPaiment> {
      return this.http.put<OrderPaiment>(`${baseUrl}/${OrderPaiment.idOrderPaiment}`, OrderPaiment);
    }
}