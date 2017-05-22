import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import 'hammerjs';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from './common/languages/index';
import { routes } from './common/app.routes';
import { MetaModule } from '@ngx-meta/core';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { CapitalizePipe } from './common/capitalize.pipe';
import { SoftwareComponent } from './services/software/software.component';
import { MarketingComponent } from './services/marketing/marketing.component';
import { GraphicDesignComponent } from './services/graphic-design/graphic-design.component';
import { ProductionsComponent } from './services/productions/productions.component';
import { AmericancoinComponent } from './portfolio/americancoin/americancoin.component';
import { WorldBankComponent } from './portfolio/world-bank/world-bank.component';
import { MinoticieroComponent } from './portfolio/minoticiero/minoticiero.component';
import { CambiaelmundoComponent } from './portfolio/cambiaelmundo/cambiaelmundo.component';
import { KriticaComponent } from './portfolio/kritica/kritica.component';
import { GdayComponent } from './portfolio/gday/gday.component';
import { CelestialSaltComponent } from './portfolio/celestial-salt/celestial-salt.component';




@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    CapitalizePipe,
    SoftwareComponent,
    MarketingComponent,
    GraphicDesignComponent,
    ProductionsComponent,
    AmericancoinComponent,
    WorldBankComponent,
    MinoticieroComponent,
    CambiaelmundoComponent,
    KriticaComponent,
    GdayComponent,
    CelestialSaltComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
      MaterialModule.forRoot(),
      FlexLayoutModule,
      Ng2PageScrollModule.forRoot(),
      RouterModule.forRoot(routes),
      MetaModule.forRoot()
  ],
  providers: [ TRANSLATION_PROVIDERS, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
