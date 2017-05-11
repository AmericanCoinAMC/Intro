import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';


import { routing } from './app.routes';

import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from '../languages/index';


import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { WhatisComponent } from './intro/whatis/whatis.component';
import { PhilosophyComponent } from './intro/philosophy/philosophy.component';
import { WalletComponent } from './intro/wallet/wallet.component';




@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    TranslatePipe,
    WhatisComponent,
    PhilosophyComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
      MaterialModule.forRoot(),
      FlexLayoutModule,
      routing
  ],
  providers: [ TRANSLATION_PROVIDERS, TranslateService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
