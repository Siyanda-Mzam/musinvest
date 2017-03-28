import {Component} from '@angular/core';

@Component({
  selector: 'discover',
  templateUrl: './discover.component.html',
  styleUrls: ['../shared/styles/animations.css', '../shared/styles/heading.scss']
})
export class DiscoverComponent {
  title = 'Discover New Music';
  body = 'Browse through a list of fresh talent now!';
  message: string;
}
