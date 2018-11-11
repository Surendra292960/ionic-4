import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataServiceProvider } from '../providers/data-service/data-service';
import{ActionSheetPage}from '../pages/action-sheet/action-sheet';
import{FabsPage}from '../pages/fabs/fabs';
import{CardsPage}from '../pages/cards/cards';
import{AscontrollerPage}from '../pages/ascontroller/ascontroller';
import{AlertcontrollerPage}from '../pages/alertcontroller/alertcontroller';
import{TabsPage,BasicPage}from '../pages/tabs/tabs';
import{SearchbarPage}from '../pages/searchbar/searchbar';
import { Camera } from '@ionic-native/camera';
import { AbbyyRTR } from '@ionic-native/abbyy-rtr';
import{NoTabsPage}from '../pages/no-tabs/no-tabs';


class CameraMock extends Camera {
  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve("BASE_64_ENCODED_DATA_GOES_HERE");
    })
  }
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ActionSheetPage,FabsPage,CardsPage,AscontrollerPage
    ,AlertcontrollerPage,TabsPage,BasicPage,SearchbarPage
    ,NoTabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ActionSheetPage,FabsPage,CardsPage,AscontrollerPage
    ,AlertcontrollerPage,TabsPage,BasicPage,SearchbarPage
    ,NoTabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: Camera, useClass: CameraMock },
    DataServiceProvider,
  ]
})
export class AppModule {}
