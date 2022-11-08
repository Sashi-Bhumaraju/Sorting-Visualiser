import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { BarsComponent } from './bars/bars.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { MobileBottomNavComponent } from './mobile-bottom-nav/mobile-bottom-nav.component';
import { MobileBodyComponent } from './mobile-body/mobile-body.component';
import { MobileComponent } from './mobile/mobile.component';
import { MatSliderModule} from '@angular/material/slider';
import { MatListModule} from '@angular/material/list';
import {ScrollingModule} from '@angular/cdk/scrolling'
import {MatIconModule} from '@angular/material/icon';
import { MobileAboutComponent } from './mobile-about/mobile-about.component';
import { MobileBottomNavvComponent } from './mobile-bottom-navv/mobile-bottom-navv.component';
import { CreateArrayComponent } from './create-array/create-array.component';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MainComponent,
    HeaderComponent,
    BarsComponent,
    MobileHeaderComponent,
    MobileBottomNavComponent,
    MobileBodyComponent,
    MobileComponent,
    MobileAboutComponent,
    MobileBottomNavvComponent,
    CreateArrayComponent,
  
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    CommonModule,
    MatListModule,
    ScrollingModule,
    MatIconModule,
    ReactiveFormsModule
    
   
    // MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
