import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../model/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsUrl = 'http://localhost:3000/products/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public getProducts(): Observable<Products[]>{
    /*
      Para colocara os parametros na url: this.apiUrl + id, no caso ficaria assim:
        return this.httpClient.get<Products[]>(this.apiUrl + id)
    */
    return this.httpClient.get<Products[]>(this.productsUrl)
  }

  public postProducts(product: any): Observable<Products>{
    return this.httpClient.post<any>(this.productsUrl, product, this.httpOptions);
  }
  public deleteProducts(productId: string): Observable<void>{
    console.log(this.productsUrl+productId)
    return this.httpClient.delete<void>(this.productsUrl+productId);
  }
  public updateProducts(product: any): Observable<void>{
    var name = product.name;
    var price = product.price;
    var category = product.category;
    var updateJson = '{"name":"' + name + '","price":"'+ price + '","category":"'+ category +'"}'
    return this.httpClient.patch<void>(this.productsUrl+product.id, updateJson, this.httpOptions);
  }
}
