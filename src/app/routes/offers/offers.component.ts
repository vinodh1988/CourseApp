import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit,OnDestroy {

  constructor() { 
    console.log("offeres is created...!!!!");
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    console.log("Offers is destroyed");
  }


}
