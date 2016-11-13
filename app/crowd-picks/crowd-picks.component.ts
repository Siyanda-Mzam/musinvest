import {Component} from '@angular/core';

@Component({
  selector: 'crowd-picks',
  template: require('./crowd-picks.component.html'),
  styles: [require('../headers.component.css')]
})
export class CrowdPicksComponent {
  title: string = 'Crowd Picks';
  body:  string = 'Find out who is liked the most by the public';
}
