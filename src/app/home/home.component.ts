import { Component } from '@angular/core';
import { Products } from '../products/products.component';


@Component({
  selector: 'app-home',
  imports: [Products],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class Home {

}
