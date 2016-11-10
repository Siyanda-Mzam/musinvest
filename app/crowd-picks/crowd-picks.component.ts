import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'crowd-picks',
  template: require('./crowd-picks.component.html')
})
export class CrowdPicksComponent {
  title: string = 'Crowd Picks';
  body:  string = 'Find out who is liked the most by the public';
}
