import {Component} from '@angular/core';
import {Image} from './tracklist.interface';

@Component({
  selector: 'css-carousel',
  template: require('./tracklist.component.html'),
  styles: [
    require('./tracklist.component.css'),
    require('../headers.component.css')]
})
export class TrackListComponent {
    //images data to be bound to the template
	public images = IMAGES;
}

//IMAGES array implementing Image interface
var IMAGES = [
	{ "title": "The Rapper", "url": "../../images/fire-rose.jpg" },
	{ "title": "Future", "url": "../../images/future-pluto.jpg" },
	{ "title": "Purple Reign", "url": "../../images/esco-terrestrial.png" },
	{ "title": "Hendrix", "url": "../../images/future-magic.jpg" },
	{ "title": "Hago", "url": "../../images/future-honest.jpg" },
  { "title": "Desiigner", "url": "../../images/life-of-desiigner.png" },
  { "title": "Lamar Cover", "url": "../../images/lamar-cover.jpg" },
  { "title": "Drake Thank", "url": "../../images/thank-me-later.jpg" },
  { "title": "Fifty", "url": "../../images/no-romeo-no-juliet.jpg" },
  { "title": "Meek Mill", "url": "../../images/meek-mill.jpg" },
  { "title": "Left Field", "url": "../../images/leftfield-lp.png" },
  { "title": "Youth", "url": "../../images/youth.jpg" },
  { "title": "Tory", "url": "../../images/tory-lanez.jpg" }
  ];