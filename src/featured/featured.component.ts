import {Component} from '@angular/core';

@Component({
    selector: 'watch-list',
    templateUrl: './featured.component.html',
    styleUrls: ['../headers.component.css']
})
export class FeaturedComponent {
    title = 'Featured';
    body = 'Start streaming from a wide variety of tunes';
}