import { Component, OnInit } from '@angular/core';
import{ShopService} from '../products/shop.service'
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
productslist=this.skirts.productlist;
cartable=[]
  constructor(private skirts:ShopService) { }
  itemtotal=0;


  ngOnInit() {

    console.log(this.skirts.productlist)

  }

  addtoCart(productid,realprice,picture,productname){

    // console.log(productid)
    var cartitems={proid:productid,proprice:realprice,proimage:picture,proname:productname,count:'1'}
    this.cartable.push(cartitems)
    this.itemtotal=this.itemtotal+realprice;
    // console.log(this.cartable)

  }

  removeitem(productid,realprice){
    for(let i=0;i<this.cartable.length;i++){

      if(this.cartable[i].proid==productid){
        this.cartable.splice(i,1)
        this.itemtotal=this.itemtotal-realprice;

      }
    }


    
  }

}
