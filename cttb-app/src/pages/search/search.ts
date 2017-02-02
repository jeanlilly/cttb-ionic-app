import { Component } from '@angular/core';
import { Contentful } from '../../app/services/contentful.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  items : any[];
  categories : any[];
  assets : any


  constructor(public navCtrl: NavController, private contentful:Contentful) {
  }

  ngOnInit() {
     this.getCategory();
  }

  getCategory() {
    this.contentful.getEntryByContent("category").subscribe( response => {
       this.categories = response.items
    }); 
  }


  getItems(ev:any) {
  	let val = ev.target.value;
  	console.log(val)
  	if(val.length == 0) {
  		this.items = null;
  		this.assets = null
  		this.getCategory()
  	}
  	else {
  		this.categories = null;
	  	this.contentful.getEntryByQuery(val).subscribe( response => {
	        this.items = response.items
	      	this.assets = response.includes.Asset
	    }); 
	}
  }
}
