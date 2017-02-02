import { Component } from '@angular/core';
import { Contentful } from '../../app/services/contentful.service';
import { Storage } from '@ionic/storage'
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html'
})
export class FavoritePage {
  favorites:any;

  constructor(public navCtrl: NavController, private contentful:Contentful, private storage: Storage) {
  }

  ngOnInit() {
     this.getFavorite();
  }

  ionViewWillEnter() {
     this.getFavorite();
  }

  getFavorite() {
  	var a = ['afasfafas', 'asdasfasfggg']
    this.storage.set('favorites', a)
    this.storage.get('favorites').then((val)=> {
    	console.log('favorites =')
    	console.log(val)    	
    })
    this.contentful.getEntryByContent("category").subscribe( response => {
       this.favorites = response.items
    }); 
  }

}
