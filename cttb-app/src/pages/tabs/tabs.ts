import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { FavoritePage } from '../favorite/favorite';
import { MorePage } from '../more/more';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = SearchPage;
  tab3Root: any = FavoritePage;
  tab4Root: any = MorePage;
  constructor() {

  }
}
