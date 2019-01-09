import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CookingDishesPage } from '../cooking-dishes/cooking-dishes';
import { BakingPage } from '../baking/baking';
import { SoupsPage } from '../soups/soups';
import { DessertsPage } from '../desserts/desserts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onGoToCookingDishes(){
    this.navCtrl.push(CookingDishesPage);
  }

  onGoToBaking(){
    this.navCtrl.push(BakingPage);
  }

  onGoToSoups(){
    this.navCtrl.push(SoupsPage);
  }

  onGoToDesserts(){
    this.navCtrl.push(DessertsPage);
  }
}
