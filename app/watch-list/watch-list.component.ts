import {Component} from '@angular/core';

@Component({
    selector: 'watch-list',
    template: require('./watch-list.component.html')
})
export class WatchListComponent {
    title: string = 'Watch List';
    body: string = 'Start streaming from a wide variety of tunes';
}