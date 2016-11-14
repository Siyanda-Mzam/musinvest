import {Component} from '@angular/core';
import {TrackListComponent} from '../tracklist/tracklist.component';

@Component({
  selector: 'home',
  template: require('./home.component.html'),
  styles: [require('../headers.component.css')],
  directives: [TrackListComponent]
})
export class HomeComponent {
  title: string = 'Welcome to Musinvest';
  body:  string = 'An investment platform developed by and for musicians';
}
