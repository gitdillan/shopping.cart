import { Component, OnInit } from '@angular/core';
import {ShopService} from '../products/shop.service'
import {ShoppingcartService} from '../cart/shoppingcart.service'

@Component({
  selector: 'app-shop1',
  templateUrl: './shop1.component.html',
  styleUrls: ['./shop1.component.css']
})
export class Shop1Component implements OnInit {
productslist=this.dresses.productlist
cartable=[]
itemtotal=0
  constructor(private dresses:ShopService, private cart:ShoppingcartService) { 


  }

  ngOnInit() {

    this.cart.localstorage_to_cart()
    this.cartable=this.cart.cartable
    this.itemtotal=this.cart.itemtotal

  }



  addtoCart(productid,realprice,picture,productname){

  this.cart.addtoCart(productid,realprice,picture,productname)

  // this.cartable = this.cart.cartable;
  // this.itemtotal=this.cart.itemtotal;

  
    }


    // removeitem(productid,realprice){

    //   this.cart.removeitem(productid,realprice)
    //   this.cartable=this.cart.cartable
    //   this.itemtotal=this.cart.itemtotal

    // }




}
