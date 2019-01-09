import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CakesPage } from '../cakes/cakes';
import { CookiesPage } from '../cookies/cookies';

/**
 * Generated class for the BakingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-baking',
  templateUrl: 'baking.html',
})
export class BakingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BakingPage');
  }

  onGoToCakes(){
    this.navCtrl.push(CakesPage);
}
onGoToCookies(){
  this.navCtrl.push(CookiesPage);
}
}
