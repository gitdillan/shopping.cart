import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trending=[{productname:'woman short skirt', realprice:'$120', lessprice:'$80', rating:'3', picture:'product-1.jpg',discount:'30%'}, {productname:'woman skirt', realprice:'$110', lessprice:'$80', rating:'3', picture:'product-2.jpg',discount:'30%'},{productname:'woman mini skirt', realprice:'$100', lessprice:'$80', rating:'3', picture:'product-3.jpg',discount:'30%'},{productname:'woman long skirt', realprice:'$140', lessprice:'$80', rating:'3', picture:'product-6.jpg',discount:'30%'},{productname:'woman red skirt', realprice:'$110', rating:'3', lessprice:'$80', picture:'product-5.jpg',discount:'30%'}]
  constructor() { }

  ngOnInit() {
  }

}
