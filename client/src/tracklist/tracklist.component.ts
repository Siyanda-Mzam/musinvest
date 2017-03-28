import {Component} from '@angular/core';
import {Image} from './tracklist.interface';
import {TrackListService} from './tracklist.service';

@Component({
  selector: 'track-list',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.scss', '../shared/styles/animations.css'],
  providers: [TrackListService]
})
export class TrackListComponent {
	public images;
  constructor(private trackListService: TrackListService) {
      this.images = trackListService.getImages();
    }
}