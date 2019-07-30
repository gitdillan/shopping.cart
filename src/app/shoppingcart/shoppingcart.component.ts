import { Component, OnInit } from '@angular/core';
import { ShoppingcartService } from '../cart/shoppingcart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  cartable=[]
  itemtotal=0

  constructor(private cart:ShoppingcartService) { }

  ngOnInit() {

    this.cart.localstorage_to_cart()
    this.cartable=this.cart.cartable
    this.itemtotal=this.cart.itemtotal
  }

  addtoCart(productid,realprice,picture,productname){

    this.cart.addtoCart(productid,realprice,picture,productname)
  
    this.cartable = this.cart.cartable;
    this.itemtotal=this.cart.itemtotal;
  
    
      }
  
  
      removeitem(productid,realprice){
  
        this.cart.removeitem(productid,realprice)
        this.cartable=this.cart.cartable
        this.itemtotal=this.cart.itemtotal
  
      }
    }
  
