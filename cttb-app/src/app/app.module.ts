import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { FavoritePage } from '../pages/favorite/favorite';
import { SearchPage } from '../pages/search/search';
import { MorePage } from '../pages/more/more';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Card } from '../pages/home/card';
import { SearchResult } from '../pages/search/result';
import { FilterPage } from '../pages/home/filter/filter';
import { PostPage } from '../pages/post/post';


@NgModule({
  declarations: [
    MyApp,
    FavoritePage,
    MorePage,
    HomePage,
    SearchPage,
    TabsPage,
    Card,
    SearchResult,
    FilterPage,
    PostPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritePage,
    MorePage,
    HomePage,
    SearchPage,
    TabsPage,
    FilterPage,
    PostPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage]
})
export class AppModule {}
