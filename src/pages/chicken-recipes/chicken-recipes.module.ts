import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChickenRecipesPage } from './chicken-recipes';

@NgModule({
  declarations: [
    ChickenRecipesPage,
  ],
  imports: [
    IonicPageModule.forChild(ChickenRecipesPage),
  ],
})
export class ChickenRecipesPageModule {}
