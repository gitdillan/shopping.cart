import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import{Routes,Router, RouterModule} from '@angular/router';
import { from } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import{ShopService} from './products/shop.service';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShopComponent } from './shop/shop.component';
import { Shop1Component } from './shop1/shop1.component';
import { Shop2Component } from './shop2/shop2.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { DisplaydataComponent } from './displaydata/displaydata.component';

import {HttpClientModule} from  '@angular/common/http'
const approot:Routes=[
{path:"", component:HomeComponent},
{path:"about", component:AboutComponent},
{path:"contact", component:ContactComponent},
{path:"shop", component:Shop1Component},
{path:"cart", component:ShoppingcartComponent},
{path:"clientdata", component:DisplaydataComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    ContactComponent,
    ShoppingComponent,
    ShopComponent,
    Shop1Component,
    Shop2Component,
    ShoppingcartComponent,
    DisplaydataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approot),
    HttpClientModule
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
