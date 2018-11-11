import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-alertcontroller',
  templateUrl: 'alertcontroller.html',
})
export class AlertcontrollerPage {

  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {

  }
  
  goback()
  {
    this.navCtrl.getPrevious();
  }

  
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
  }
  
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Do you want to buy this book?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }
  
  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            if (data.isValid(data.username, data.password)) {
              // logged in!
            } else {
              // invalid login
              return false;
            }
          }
        }
      ]
    });
    alert.present();
  }
  }

