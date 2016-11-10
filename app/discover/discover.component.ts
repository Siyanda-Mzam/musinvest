import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {StateService} from '../common/state.service';

@Component({
  selector: 'discover',
  template: require('./discover.component.html')
})
export class DiscoverComponent {
  title: string = 'Discover New Music';
  body: string = 'Browse through a list of fresh talent now!';
  message: string;
}
