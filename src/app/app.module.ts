import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CookingDishesPage } from '../pages/cooking-dishes/cooking-dishes';
import { BakingPage } from '../pages/baking/baking';
import { SoupsPage } from '../pages/soups/soups';
import { DessertsPage } from '../pages/desserts/desserts';
import { ChickenRecipesPage } from '../pages/chicken-recipes/chicken-recipes';
import { PastaRecipesPage } from '../pages/pasta-recipes/pasta-recipes';
import { CakesPage } from '../pages/cakes/cakes';
import { CookiesPage } from '../pages/cookies/cookies';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CookingDishesPage,
    BakingPage,
    SoupsPage,
    DessertsPage,
    ChickenRecipesPage,
    PastaRecipesPage,
    CakesPage,
    CookiesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CookingDishesPage,
    BakingPage,
    SoupsPage,
    DessertsPage,
    ChickenRecipesPage,
    PastaRecipesPage,
    CakesPage,
    CookiesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
