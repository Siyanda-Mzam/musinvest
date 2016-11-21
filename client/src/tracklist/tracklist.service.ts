import {Injectable} from '@angular/core';
import {Image} from './tracklist.interface';

@Injectable()
export class TrackListService {
    //IMAGES array implementing Image interface
    images = [
	{ "title": "The Rapper", "url": "../images/fire-rose.jpg" },
	{ "title": "Future", "url": "../images/future-pluto.jpg" },
    { "title": "Tory", "url": "../images/tory-lanez.jpg" },
	{ "title": "Purple Reign", "url": "../images/esco-terrestrial.png" },
	{ "title": "Hendrix", "url": "../images/future-magic.jpg" },
    { "title": "Hago", "url": "../images/future-honest.jpg" },
    { "title": "Desiigner", "url": "../images/life-of-desiigner.png" },
    { "title": "Lamar Cover", "url": "../images/lamar-cover.jpg" },
    { "title": "Drake Thank", "url": "../images/thank-me-later.jpg" },
    { "title": "Fifty", "url": "../images/no-romeo-no-juliet.jpg" },
    { "title": "Meek Mill", "url": "../images/meek-mill.jpg" },
    { "title": "Left Field", "url": "../images/leftfield-lp.png" },
    { "title": "Youth", "url": "../images/youth.jpg" }
  ];
  /* Throw*/
  getImages(){
      return this.images;
  }
}