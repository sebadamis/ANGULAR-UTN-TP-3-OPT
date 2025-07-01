import { Component, inject } from '@angular/core';
import { Product, ProductsServices } from '../services/products.services.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class Products {
  products : Product[] = []
  loading : boolean = true
  error : string | null = null
  private productsService = inject(ProductsServices)
  ngOnInit (){
    let observable = this.productsService.getProducts()
    observable.subscribe(
      {
        next: (products) => {
          this.products = products
          this.loading = false
        },
        error: (error) => {
          console.error("el observable fallo en ejecucion", error)
          this.error = 'Fallo critico al obtener productos'
          this.loading = false
        }
      }
    )
  }
}
