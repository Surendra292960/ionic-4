import { Component,ViewChild } from '@angular/core';

import { Platform ,NavController} from 'ionic-angular';

import { ListPage } from '../list/list';
import{ActionSheetPage}from '../action-sheet/action-sheet';
import{FabsPage}from '../fabs/fabs';
import { CardsPage } from '../cards/cards';
import{AscontrollerPage}from '../ascontroller/ascontroller';
import{AlertcontrollerPage}from '../alertcontroller/alertcontroller';
import { SearchbarPage } from '../searchbar/searchbar';


@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Tabs</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>
  </ion-content>
`})
export class TabsPage {
isAndroid: boolean = false;


constructor(platform: Platform) {
  this.isAndroid = platform.is('android');
}
}

@Component({
  selector: 'page-tabs',
  template: `
  <ion-tabs class="tabs-basic">
    <ion-tab tabTitle="FABs" [root]="rootPage"></ion-tab>
    <ion-tab tabTitle="List" [root]="rootPage1"></ion-tab>
    <ion-tab tabTitle="Social Card" [root]="rootPage2"></ion-tab>
  </ion-tabs>
  
`})
export class BasicPage {
rootPage = AlertcontrollerPage;
rootPage1 = ListPage;
rootPage2 = CardsPage;
tab3Root = AlertcontrollerPage;
constructor(public navCtrl: NavController) {
}
}




