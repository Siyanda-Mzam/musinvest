import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { FeaturedComponent } from '../featured/featured.component';
import { CrowdPicksComponent } from '../crowd-picks/crowd-picks.component';
import { DiscoverComponent } from '../discover/discover.component';
import { SigninComponent } from '../join/login/login.component';
import { LoginService } from '../join/login/login.service';
import { PageInfoService } from '../join/login/page-info-service';
import { TrackListComponent } from '../tracklist/tracklist.component';
import { SignupComponent, Artist, Scouter } from '../join/signup/signup.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturedComponent,
    CrowdPicksComponent,
    DiscoverComponent,
    SigninComponent,
    TrackListComponent,
    Artist, Scouter, SignupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ LoginService, PageInfoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
