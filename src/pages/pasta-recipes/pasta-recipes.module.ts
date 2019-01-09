import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PastaRecipesPage } from './pasta-recipes';

@NgModule({
  declarations: [
    PastaRecipesPage,
  ],
  imports: [
    IonicPageModule.forChild(PastaRecipesPage),
  ],
})
export class PastaRecipesPageModule {}
