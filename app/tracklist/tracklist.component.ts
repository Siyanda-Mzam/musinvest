//Import Component form the angular core package
import {Component} from '@angular/core';

//Importt the Image interface
import {Image} from './tracklist.interface';

//Compoent Decorator
@Component({
  //Name of our tag
  selector: 'css-carousel',
  //Template for the tag
  template: require('./tracklist.component.html'),
  //Styles for the tag
  styles: [require('./tracklist.component.css'), require('../headers.component.css')]
})
//Carousel Component itself
export class TrackListComponent {
    //images data to be bound to the template
	public images = IMAGES;
}

//IMAGES array implementing Image interface
var IMAGES: Image[] = [
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
  { "title": "Left Field", "url": "../../images/leftfield-lp.png" }
  { "title": "Youth", "url": "../../images/youth.jpg" },
  
  
];