import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { BarsComponent } from './bars/bars.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MainComponent,
    HeaderComponent,
    BarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
