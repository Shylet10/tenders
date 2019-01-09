import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChickenSoupPage } from './chicken-soup';

@NgModule({
  declarations: [
    ChickenSoupPage,
  ],
  imports: [
    IonicPageModule.forChild(ChickenSoupPage),
  ],
})
export class ChickenSoupPageModule {}
