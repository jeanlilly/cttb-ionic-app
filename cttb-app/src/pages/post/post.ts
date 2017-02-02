import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Contentful } from '../../app/services/contentful.service';

@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {
  item: any  
  assets: any

  constructor(private contentful:Contentful, public params:NavParams) {
    this.item = params.get('item')
    this.assets = params.get('assets')
  }

  ionViewWillEnter() {
  	let tabs = document.querySelectorAll('.tabbar')
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.transform = 'translateY(56px)';
      });
   	}
  }

  ionViewDidLeave() {
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.transform = 'translateY(0)';
      });
    } // end if
  }

}

