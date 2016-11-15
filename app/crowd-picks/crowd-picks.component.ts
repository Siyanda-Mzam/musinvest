import {Component} from '@angular/core';

@Component({
  selector: 'crowd-picks',
  template: require('./crowd-picks.component.html'),
  styles: [require('../headers.component.css')]
})
export class CrowdPicksComponent {
  title = 'Crowd Picks';
  body = 'Find out who is liked the most by the public';
}
