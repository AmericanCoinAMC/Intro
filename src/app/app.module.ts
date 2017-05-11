import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import {Ng2PageScrollModule} from 'ng2-page-scroll/ng2-page-scroll';

//import { routing } from './app.routes';

import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from '../languages/index';


import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { WhatisComponent } from './intro/whatis/whatis.component';
import { PhilosophyComponent } from './intro/philosophy/philosophy.component';
import { WalletComponent } from './intro/wallet/wallet.component';
import { MiningPoolComponent } from './intro/mining-pool/mining-pool.component';
import { TechSpecsComponent } from './intro/tech-specs/tech-specs.component';
import { ContactComponent } from './intro/contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    TranslatePipe,
    WhatisComponent,
    PhilosophyComponent,
    WalletComponent,
    MiningPoolComponent,
    TechSpecsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
      MaterialModule.forRoot(),
      FlexLayoutModule,
      Ng2PageScrollModule.forRoot()
  ],
  providers: [ TRANSLATION_PROVIDERS, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
