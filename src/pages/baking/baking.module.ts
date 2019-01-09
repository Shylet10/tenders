import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BakingPage } from './baking';

@NgModule({
  declarations: [
    BakingPage,
  ],
  imports: [
    IonicPageModule.forChild(BakingPage),
  ],
})
export class BakingPageModule {}
