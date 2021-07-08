import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from '../model/orders.models';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  orderUrl = 'http://localhost:3000/orders/';
  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(
    private httpClient: HttpClient
  ) { }

  public getOrders(): Observable<Orders[]>{
    /*
      Para colocara os parametros na url: this.apiUrl + id, no caso ficaria assim:
        return this.httpClient.get<Products[]>(this.apiUrl + id)
    */
    return this.httpClient.get<Orders[]>(this.orderUrl)
  }

  public postOrders(order: any): Observable<Orders>{
    return this.httpClient.post<any>(this.orderUrl, order, this.httpOptions);
  }

  public deleteOrders(orderId: string): Observable<void>{
    console.log(this.orderUrl+orderId)
    return this.httpClient.delete<void>(this.orderUrl+orderId);
  }

  public updateOrders(productsList: any, id: string): Observable<void>{
    return this.httpClient.patch<void>(this.orderUrl+id, productsList, this.httpOptions);
  }
}
