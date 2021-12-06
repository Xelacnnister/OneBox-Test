import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../../services/global-data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styles: [
  ]
})
export class ShoppingCartComponent implements OnInit {

  constructor( private globaldataservice: GlobalDataService ) { }

  ngOnInit(): void {
  }

}
