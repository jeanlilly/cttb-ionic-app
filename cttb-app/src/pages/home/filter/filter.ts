import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';




@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html'
})
export class FilterPage {
  items: any;
  assets: any
  first_item: any;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
  }


}

