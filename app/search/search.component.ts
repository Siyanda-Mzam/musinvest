import {Component} from '@angular/core';

@Component({
    selector: 'search',
    template: require('./search.component.html')
})
export class SearchComponent {
    title: 'Search for a specific artist';
    body: 'Easily find the artist you are looking for';
}