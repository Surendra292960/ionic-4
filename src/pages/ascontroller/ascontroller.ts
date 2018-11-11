import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular'
import{NavController}from 'ionic-angular';

@Component({
  selector: 'page-ascontroller',
  templateUrl: 'ascontroller.html',
})
export class AscontrollerPage {

  constructor(public actionSheetCtrl: ActionSheetController,public navCtrl: NavController,) {}

  goback()
  {
    this.navCtrl.getPrevious();
  }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => { console.log('Destructive clicked');}
        },
        
        {
          text: 'Archive',
          handler: () => {console.log('Archive clicked'); }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {console.log('Cancel clicked'); }
        }
      ]
    });
 
    actionSheet.present();
  }
  
}
