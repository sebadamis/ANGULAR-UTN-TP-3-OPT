import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Products{
  id: number,
  titulo: string,
  descuento: number,
  precioFinal: number,
  precioAntes: number,
  stock: number,
  img: string,
  categoria: string,
  descripcion: string
}

@Injectable({
  providedIn: 'root'
})
export class ProductsServicesService {
  // https://fakestoreapi.com/products
  private API_URL = "../../../public/product.json"
  constructor(private http: HttpClient) { }
  getProducts () : Observable<Products[]>{
    return this.http.get<Products[]>(this.API_URL)
  }
}
