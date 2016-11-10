import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {CrowdPicksComponent} from './crowd-picks/crowd-picks.component';
import {HomeComponent} from './home/home.component';
import {WatchListComponent} from './watch-list/watch-list.component';
import {DiscoverComponent} from './discover/discover.component';
import {SigninComponent} from './login/login.component';
import {SearchComponent} from './search/search.component';
import {SignupComponent} from './signup/signup.component';
import {StateService} from './common/state.service';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [ ROUTER_DIRECTIVES ]
})
@Routes([
  {path: '/',                   component: HomeComponent },
  {path: '/search',             component: SearchComponent},
  {path: '/watch-list',         component: WatchListComponent},
  {path: '/crowd-picks',        component: CrowdPicksComponent},
  {path: '/discover-talent',    component: DiscoverComponent},
  {path: '/signin',             component: SigninComponent},
  {path: '/signup',             component: SignupComponent},
  {path: '/*',                  component: HomeComponent}
])
export class AppComponent {}
