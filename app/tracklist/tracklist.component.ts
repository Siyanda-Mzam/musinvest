import {Component} from '@angular/core';
import {Image} from './tracklist.interface';
import {TrackListService} from './tracklist.service';

@Component({
  selector: 'css-carousel',
  template: require('./tracklist.component.html'),
  styles: [
    require('./tracklist.component.css'),
    require('../headers.component.css')],
  providers: [TrackListService]
})
export class TrackListComponent {
	public images;
  constructor(trackListService: TrackListService) {
      this.images = trackListService.getImages();
    }
}