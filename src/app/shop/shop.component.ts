import { Component, OnInit } from '@angular/core';
import{ShopService} from '../products/shop.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  productslist=this.dresses.productlist;
  cartable=[]
  constructor(private dresses:ShopService) { }
  itemtotal=0;
  ngOnInit() {
  }


  addtoCart(productid,realprice,picture,productname){

  var itemInCart=false;
 for(var i=0;i<this.cartable.length;i++){

  if(this.cartable[i].proId==productid){

    this.cartable[i].procount=this.cartable[i].procount+1
    this.itemtotal=this.itemtotal+realprice
  
    itemInCart=true

    localStorage.setItem("cartable",JSON.stringify(this.cartable))

  }


 }

 if(itemInCart==false){

  let cartContent={proId:productid,proprice:realprice,proname:productname,propic:picture,procount:1}
  this.cartable.push(cartContent)
  this.itemtotal=this.itemtotal+realprice
 }


  }

   removeitem(productid,realprice){
   for(let i=0;i<this.cartable.length;i++){

     if(this.cartable[i].proId==productid){
        this.cartable[i].procount=this.cartable[i].procount-1
        if(this.cartable[i].procount==0){

        this.cartable.splice(i,1)

        }
        this.itemtotal=this.itemtotal-realprice;

      }
  }


    
  }

}
