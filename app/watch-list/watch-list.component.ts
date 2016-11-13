import {Component} from '@angular/core';

@Component({
    selector: 'watch-list',
    template: require('./watch-list.component.html'),
    styles: [require('../headers.component.css')]
})
export class WatchListComponent {
    title: string = 'Featured';
    body: string = 'Start streaming from a wide variety of tunes';
}