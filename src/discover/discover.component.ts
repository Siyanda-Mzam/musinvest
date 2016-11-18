import {Component} from '@angular/core';

@Component({
  selector: 'discover',
  templateUrl: './discover.component.html',
  styleUrls: ['../headers.component.css']
})
export class DiscoverComponent {
  title = 'Discover New Music';
  body = 'Browse through a list of fresh talent now!';
  message: string;
}
