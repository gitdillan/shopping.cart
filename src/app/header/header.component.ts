import { Component, OnInit } from '@angular/core';
import {ShoppingcartService} from '../cart/shoppingcart.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

constructor(public cart:ShoppingcartService) { }

  ngOnInit() {    
  }

}
