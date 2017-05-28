import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';

import {Ng2PageScrollModule} from 'ng2-page-scroll';

import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from './common/languages/index';

import { routes } from './common/app.routes';

import { MetaModule } from '@ngx-meta/core';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';








@NgModule({
  declarations: [
      TranslatePipe,
      AppComponent,
      HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
      MaterialModule,
      FlexLayoutModule,
      Ng2PageScrollModule.forRoot(),
      RouterModule.forRoot(routes),
      MetaModule.forRoot(),
      AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ TRANSLATION_PROVIDERS, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
