import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CakesPage } from './cakes';

@NgModule({
  declarations: [
    CakesPage,
  ],
  imports: [
    IonicPageModule.forChild(CakesPage),
  ],
})
export class CakesPageModule {}
