import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AngularFireModule } from 'angularfire2';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


import { AppComponent } from './app.component';
import { LeftNavigationComponent } from './main/layout/left-navigation/left-navigation.component';
import { HeaderComponent } from './main/layout/header/header.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyAkLPGBNEgTdMkursaPKrWRhG4k8tkanhc',
  authDomain: 'materialseed-75b98.firebaseapp.com',
  databaseURL: 'https://materialseed-75b98.firebaseio.com',
  projectId: 'materialseed-75b98',
  storageBucket: 'materialseed-75b98.appspot.com',
  messagingSenderId: '487095671012'
};


export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, '/languages', '-lang.json');
}


@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    HeaderComponent,
    MainComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
      MaterialModule.forRoot(),
      FlexLayoutModule,
      TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [Http]
          }
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
