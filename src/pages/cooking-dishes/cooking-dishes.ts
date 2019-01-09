import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChickenRecipesPage } from '../chicken-recipes/chicken-recipes';
import { PastaRecipesPage } from '../pasta-recipes/pasta-recipes';



@IonicPage()
@Component({
  selector: 'page-cooking-dishes',
  templateUrl: 'cooking-dishes.html',
})
export class CookingDishesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CookingDishesPage');
  }

  onGoToChickenRecipes() {
    this.navCtrl.push(ChickenRecipesPage);
  }

  onGoToPastaRecipes(){
    this.navCtrl.push(PastaRecipesPage);
  }

}
