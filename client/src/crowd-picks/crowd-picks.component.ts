import {Component} from '@angular/core';

@Component({
  selector: 'crowd-picks',
  templateUrl: './crowd-picks.component.html',
  styleUrls: ['../shared/styles/animations.css', '../shared/styles/heading.scss']
})
export class CrowdPicksComponent {
  title = 'Crowd Picks';
  body = 'Find out who is liked the most by the public';
}
