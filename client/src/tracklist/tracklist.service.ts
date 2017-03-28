import {Injectable} from '@angular/core';
import {Image} from './tracklist.interface';

@Injectable()
export class TrackListService {
    //IMAGES array implementing Image interface
    images = [
	{ "title": "The Rapper", "url": "src/images/fire-rose.jpg" },
	{ "title": "Future", "url": "src/images/future-pluto.jpg" },
    { "title": "Tory", "url": "src/images/tory-lanez.jpg" },
	{ "title": "Purple Reign", "url": "src/images/esco-terrestrial.png" },
	{ "title": "Hendrix", "url": "src/images/future-magic.jpg" },
    { "title": "Hago", "url": "src/images/future-honest.jpg" },
    { "title": "Desiigner", "url": "src/images/life-of-desiigner.png" },
    { "title": "Lamar Cover", "url": "src/images/lamar-cover.jpg" },
    { "title": "Drake Thank", "url": "src/images/thank-me-later.jpg" },
    { "title": "Fifty", "url": "src/images/no-romeo-no-juliet.jpg" },
    { "title": "Meek Mill", "url": "src/images/meek-mill.jpg" },
    { "title": "Left Field", "url": "src/images/leftfield-lp.png" },
    { "title": "Youth", "url": "src/images/youth.jpg" }
  ];
  /* Throw*/
  getImages(){
      return this.images;
  }
}