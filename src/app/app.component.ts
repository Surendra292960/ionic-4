import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,MenuController, } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import{ActionSheetPage}from '../pages/action-sheet/action-sheet';
import{FabsPage}from '../pages/fabs/fabs';
import { CardsPage } from '../pages/cards/cards';
import{AscontrollerPage}from '../pages/ascontroller/ascontroller';
import{AlertcontrollerPage}from '../pages/alertcontroller/alertcontroller';
import{TabsPage,BasicPage}from '../pages/tabs/tabs';
import{SearchbarPage}from '../pages/searchbar/searchbar';
import{NoTabsPage}from '../pages/no-tabs/no-tabs'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'ActionSheetPage', component: ActionSheetPage },
      {title: 'Floating Action ', component:FabsPage},
      {title: 'Cards ', component:CardsPage},
      {title: 'AscontrollerPage', component:AscontrollerPage},
      {title: 'AlertcontrollerPage',component:AlertcontrollerPage},
    //  {title: 'TabsPage',component:TabsPage},
      {title: 'Tabs page',component:BasicPage},
      {title:'SearchbarPage',component:SearchbarPage},
      {title:'NoTabsPage',component:NoTabsPage},
   
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
