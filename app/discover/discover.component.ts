import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {StateService} from '../common/state.service';

@Component({
  selector: 'discover',
  template: require('./discover.component.html'),
  styles: [require('../headers.component.css')]
})
export class DiscoverComponent {
  title = 'Discover New Music';
  body = 'Browse through a list of fresh talent now!';
  message: string;
}
