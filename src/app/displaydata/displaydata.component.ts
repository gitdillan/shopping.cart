import { Component, OnInit } from '@angular/core';
import { DataService } from '../externalArray/data.service';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit() {

    this.data.getusers().subscribe(users=>{

      console.log(users)
    })
    }
  }


