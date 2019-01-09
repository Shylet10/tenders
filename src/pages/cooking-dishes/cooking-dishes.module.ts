import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CookingDishesPage } from './cooking-dishes';

@NgModule({
  declarations: [
    CookingDishesPage,
  ],
  imports: [
    IonicPageModule.forChild(CookingDishesPage),
  ],
})
export class CookingDishesPageModule {}
