import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  productlist=[ 
  {productname:'woman short skirt', realprice:120, lessprice:'$80', rating:'3', picture:'product-1.jpg',proid:1},
  {productname:'woman short skirt', realprice:120, lessprice:'$80', rating:'3', picture:'product-2.jpg',proid:2},
  {productname:'woman short skirt', realprice:120, lessprice:'$80', rating:'3', picture:'product-3.jpg',proid:3},
  {productname:'woman short skirt', realprice:120, lessprice:'$80', rating:'3', picture:'product-4.jpg',proid:4},
  {productname:'woman short skirt', realprice:120, lessprice:'$80', rating:'3', picture:'product-5.jpg',proid:5},
  {productname:'woman short skirt', realprice:120, lessprice:'$80', rating:'3', picture:'product-6.jpg',proid:6},
  {productname:'woman short skirt', realprice:120, lessprice:'$80', rating:'3', picture:'product-7.jpg',proid:7},
  {productname:'woman short skirt', realprice:120, lessprice:'$80', rating:'3', picture:'product-8.jpg',proid:8},
]
  threestar='<span class="ion-ios-star"></span><span class="ion-ios-star"></span><span class="ion-ios-star"></span><span class="ion-ios-star-outline"></span><span class="ion-ios-star-outline"></span>'
  fourstar='<span class="ion-ios-star"></span><span class="ion-ios-star"></span><span class="ion-ios-star"></span><span class="ion-ios-star"></span><span class="ion-ios-star-outline"></span>'
  constructor() { }
}
