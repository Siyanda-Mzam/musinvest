import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {CrowdPicksComponent} from './crowd-picks/crowd-picks.component';
import {HomeComponent} from './home/home.component';
import {WatchListComponent} from './featured/featured.component';
import {DiscoverComponent} from './discover/discover.component';
import {SigninComponent} from './join/login/login.component';
import {SignupComponent,SignAsArtistComponent, SignAsScouterComponent} from './join/signup/signup.component';
import {SearchComponent} from './search/search.component';
import {StateService} from './common/state.service';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css'), require('./headers.component.css'), require('./join/sign.component.css')],
  directives: [ ROUTER_DIRECTIVES ]
})
@Routes([
  {path: '/',                   component: HomeComponent },
  {path: '/search',             component: SearchComponent},
  {path: '/featured',         component: WatchListComponent},
  {path: '/picks',        component: CrowdPicksComponent},
  {path: '/discover',    component: DiscoverComponent},
  {path: '/signin',             component: SigninComponent},
  {path: '/signup',             component: SignupComponent},
  {path: '/signup/as-artist', component: SignAsArtistComponent},
  {path: '/signup/as-scouter', component: SignAsScouterComponent},
  {path: '/*',                  component: HomeComponent}
])
export class AppComponent {}
