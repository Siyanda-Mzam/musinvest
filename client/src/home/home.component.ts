import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['../shared/styles/animations.css', '../shared/styles/heading.scss'],
})
export class HomeComponent {
  title = 'Welcome to Muse';
  middle = 'I';
  end = 'nvest';
  body = 'An investment platform developed by and for musicians';
}
