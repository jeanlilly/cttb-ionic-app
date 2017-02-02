import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-card',
  templateUrl: 'card.html'
})
export class Card {
  @Input() id: string;
  @Input() assets: any
  @Input() item: any  
  asset: any


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
}
