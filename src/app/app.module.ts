import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { StartComponent } from './start/start.component';
import { LoadingComponent } from './loading/loading.component';
import { LayoutModule } from './layout/layout.module';
import { LandingComponent } from './landing/landing.component';
import { MaterialModule } from './material/material.module';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocationComponent } from './location/location.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AmenityComponent } from './amenity/amenity.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FloorComponent } from './floor/floor.component';
import { SupportComponent } from './support/support.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartComponent,
    LoadingComponent,
    LandingComponent,
    LocationComponent,
    AmenityComponent,
    SignupComponent,
    LoginComponent,
    FloorComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgImageSliderModule,
    NgbModule,
    GoogleMapsModule,
    MatCarouselModule.forRoot(),
    LayoutModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
