import {Component} from '@angular/core';
import {Image} from './tracklist.interface';
import {TrackListService} from './tracklist.service';

@Component({
  selector: 'track-list',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css', '../headers.component.css'],
  providers: [TrackListService]
})
export class TrackListComponent {
	public images;
  constructor(trackListService: TrackListService) {
      this.images = trackListService.getImages();
    }
}