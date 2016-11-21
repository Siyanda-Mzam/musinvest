import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrowdPicksComponent } from '../crowd-picks/crowd-picks.component';
import { HomeComponent } from '../home/home.component';
import { FeaturedComponent } from '../featured/featured.component';
import { DiscoverComponent } from '../discover/discover.component';
import { SigninComponent } from '../join/login/login.component';
import { SignupComponent, SignAsArtistComponent, SignAsScouterComponent } from '../join/signup/signup.component';

const PresetRoutes: Routes = [
    { path: '',                    component: HomeComponent },
    { path: 'featured',           component: FeaturedComponent },
    { path: 'picks',              component: CrowdPicksComponent },
    { path: 'discover',           component: DiscoverComponent },
    { path: 'signin',             component: SigninComponent },
    { path: 'signup',             component: SignupComponent },
    { path: 'signup/as-artist',   component: SignAsArtistComponent },
    { path: 'signup/as-scouter',  component: SignAsScouterComponent },
    { path: '*',                  component: HomeComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(PresetRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}