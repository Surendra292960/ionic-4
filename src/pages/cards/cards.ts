import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {
  testRadioOpen: boolean;
  testRadioResult;
  items;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }
  YouTube(){ window.open('https://www.youtube.com/', '_system'); }
  Facebook(){ window.open('https://www.facebook.com/', '_system'); }
  Twitter(){ window.open('https://www.twitter.com/', '_system'); }
  Google(){ window.open('https://www.google.co.in/', '_system'); }

    
  goback() {
    this.navCtrl.getPrevious();
   }
}
