import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';

import { routes } from './routes/app.routes';

import {Ng2PageScrollModule} from 'ng2-page-scroll';

import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from './languages/index';

import { MetaModule } from '@ngx-meta/core';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { WhatisComponent } from './components/home/whatis/whatis.component';
import { WalletComponent } from './components/home/wallet/wallet.component';
import { HomeComponent } from './components/home/home.component';
import { MiningComponent } from './components/home/mining/mining.component';
import { SpecsComponent } from './components/home/specs/specs.component';
import { DownloadsComponent } from './components/home/downloads/downloads.component';
import { ContactComponent } from './components/home/contact/contact.component';





@NgModule({
  declarations: [
      TranslatePipe,
      AppComponent,
      WhatisComponent,
      WalletComponent,
      HomeComponent,
      MiningComponent,
      SpecsComponent,
      DownloadsComponent,
      ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
      MaterialModule,
      FlexLayoutModule,
      Ng2PageScrollModule.forRoot(),
      MetaModule.forRoot(),
      AngularFireModule.initializeApp(environment.firebase),
      RouterModule.forRoot(routes),
  ],
  providers: [ TRANSLATION_PROVIDERS, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
