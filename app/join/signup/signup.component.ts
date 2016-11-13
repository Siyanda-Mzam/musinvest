import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'signup',
    template: require('./signup.component.html'),
    styles: [require('../sign.component.css'), require('../../headers.component.css')]
})
export class SignupComponent {
    head: string = 'Musinvest';
    title: string = 'Let\'s get this career to the next level';
    body: string = 'It\'s either you step forward into growth or step back into safety';
    summary: string = 'is a free online platform built to serve\
    as a common ground of reach between musicians and talent seekers.\
    Artists put up their music on the platform for showcasing,\
    and Scouters browse, discover and invest in them.';
    join: string = 'Accelerate the growth of your career with us, today.';
    signupSubHeader: string = 'Put your 2 cents in and get a buck back:';
    confMsg: string = 'You will receive an email to confirm your part in\
     this venture :)';
    email: string;
    fname: string;
    lname: string;
}
@Component({
    selector: 'as-artist',
    template: require('./as-artist.component.html'),
    styles: [require('../sign.component.css')]
})
export class SignAsArtistComponent {
    alias: string;
    origin: string;
    contact: number;
}
@Component({
    selector: 'as-scouter',
    template: require('./as-scouter.component.html'),
    styles: [require('../sign.component.css')]
})
export class SignAsScouterComponent {
    label: string;
    regNo: string;
    city: string;
    publicEmail: string;
    website: string;
}