import { Component } from '@angular/core';
import { Contentful } from '../../app/services/contentful.service';
import { NavController } from 'ionic-angular';
import { FilterPage } from './filter/filter';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any;
  assets: any
  first_item: any;

  constructor(public navCtrl: NavController, private contentful:Contentful) {
  }

  ngOnInit() {
     this.getPost();
  }

  getPost() {
     this.contentful.getEntryByContent("post").subscribe( response => {
      	this.first_item = response.items[0]
        this.items = response.items
	      this.assets = response.includes.Asset
        console.log(response);
        console.log(this.first_item.fields.featuredImage.sys.id);
     }); 
  }

  viewPost() {}

  viewFilter() {
    this.navCtrl.push(FilterPage, {})
  }
}

