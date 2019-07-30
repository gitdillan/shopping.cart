import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  constructor() { }

cartable=[]
itemtotal=0
itemcount=0

  addtoCart(productid,realprice,picture,productname){

    var itemInCart=false;
   for(var i=0;i<this.cartable.length;i++){
  
    if(this.cartable[i].proId==productid){
  
      this.cartable[i].procount=this.cartable[i].procount+1
      this.itemtotal=this.itemtotal+realprice
      // console.log(this.cartable[i].procount)
      itemInCart=true
      this.itemcount++
     // console.log(this.itemcount)
     this.cart_to_localstorage()
  
    }
  
  
   }
  
   if(itemInCart==false){
    this.cartable.push({proId:productid,proprice:realprice,proname:productname,propic:picture,procount:1})
    this.itemtotal=this.itemtotal+realprice
    this.itemcount++
    //console.log(this.itemcount)
    this.cart_to_localstorage()
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
          this.itemcount--;
          this.cart_to_localstorage()
  
        }
    }
  
  
      
    }


   cart_to_localstorage(){

localStorage.setItem('localcart',JSON.stringify(this.cartable))
localStorage.setItem('localtotal', this.itemtotal.toString())
localStorage.setItem('localcount', this.itemcount.toString())

   } 

   localstorage_to_cart(){
    if(localStorage.getItem('localcart')){
      this.cartable=JSON.parse(localStorage.getItem('localcart'))
      this.itemcount=parseInt(localStorage.getItem('localcount'))
    }
    
    if(localStorage.getItem('localtotal')){
      this.itemtotal=parseInt(localStorage.getItem('localtotal'))
    }
  

   

   }

}


//JSON.stringify = convert array to string
//JONS.parse = string back to array
//i=0 for the starting of the array
//i<this.arrayname.length for the lenth of the array
//i++ is the adding next arry item
// in reverse we can use i=10 (if arry length is 10), i>0, i--
//if want to start from fifth arry number we can start i=5