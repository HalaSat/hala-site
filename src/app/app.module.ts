import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import {MatDividerModule} from '@angular/material/divider';
import { FeatureComponent } from './feature/feature.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from '@angular/material';
import { ParallaxModule, ParallaxConfig } from "ngx-parallax";

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    SlickCarouselModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatIconModule,
    ParallaxModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent, FeatureComponent]
})
export class AppModule { }
