import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AngularFireModule } from 'angularfire2';

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
      FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
