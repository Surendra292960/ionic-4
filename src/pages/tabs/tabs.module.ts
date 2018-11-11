import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage,BasicPage } from './tabs';

@NgModule({
  declarations: [
    TabsPage,BasicPage
  ],
  imports: [
    IonicPageModule.forChild(BasicPage),
  ],
})
export class TabsPageModule {}
