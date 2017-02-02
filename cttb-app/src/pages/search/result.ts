import { Component, Input } from '@angular/core';

@Component({
  selector: 'search-result',
  templateUrl: 'result.html'
})
export class SearchResult {
  @Input() assets: any
  @Input() item: any  
  asset: any


  ngOnInit() {
     this.getAssetById();
  }

  getAssetById() {
      if(this.assets != null) {
          this.assets.forEach((asset) => {
              if(this.item.fields.featuredImage) {
                if(this.item.fields.featuredImage.sys.id == asset.sys.id) {
                  this.asset = asset
                  console.log("found asset")
                  console.log(asset)
                  return
                }
              }
          })
      }
  }
}
