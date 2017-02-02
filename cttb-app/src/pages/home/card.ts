import { Component, Input } from '@angular/core';
import { PostPage } from '../post/post';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'home-card',
  templateUrl: 'card.html'
})
export class Card {
  @Input() id: string;
  @Input() assets: any
  @Input() item: any  
  asset: any

  constructor(public navCtrl: NavController) {
  }


  ngOnInit() {
     this.getAssetById();
  }

  getAssetById() {
      if(this.assets != null) {
          this.assets.forEach((asset) => {
              if(this.id == asset.sys.id) {
                  this.asset = asset
              }
          })
      }
      return
  }

  viewPost(item:any) {
    this.navCtrl.push(PostPage, {item:item, assets:this.assets})
  }
}
