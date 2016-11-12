import {Component} from '@angular/core';

@Component({
  selector: 'home',
  template: require('./home.component.html'),
  styles: ['background-color:blue']
})
export class HomeComponent {
  title: string = 'Welcome to Musinvest';
  body:  string = 'An investment platform developed by and for musicians';
}
