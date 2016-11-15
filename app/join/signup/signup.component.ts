import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {SignupService, AsScouterService, AsArtistService, LocationService} from './signup.service';

@Component({

    selector: 'signup',
    template: require('./signup.component.html'),
    styles: [require('../sign.component.css'), require('../../headers.component.css')],
    providers: [SignupService]
})
export class SignupComponent {
    head: string; title: string; body: string; summary: string; join: string;
    signupSubHeader: string; confMsg: string; roles: string[]; email: string;
    fname: string; lname: string; role:string;
    constructor(signupService: SignupService) {
        this.head = signupService.getHead();
        this.body = signupService.getBody();
        this.title = signupService.getTitle();
        this.summary = signupService.getSummary();
        this.join = signupService.getJoin();
        this.signupSubHeader = signupService.getSignupSubHeader();
        this.confMsg = signupService.getConfMsg();
        this.roles = signupService.getRoles();
        this.role = 'an artist';
    }
    private asRole(value){
        this.role = value;
    }
    private joinUs()
    {
        if (this.role == 'a scouter')
         location.href = '/signup/as-scouter';
        else if (this.role == 'an artist')
            location.href = '/signup/as-artist';
        else
            location.href = '/';
    }
}
@Component({
    selector: 'as-artist',
    template: require('./as-artist.component.html'),
    styles: [require('../sign.component.css'), require('../../headers.component.css')],
    providers: [AsArtistService, LocationService]
})
export class SignAsArtistComponent {
    alias: string;
    origin: string;
    contact: number;
}
@Component({
    selector: 'as-scouter',
    template: require('./as-scouter.component.html'),
    styles: [require('../sign.component.css'), require('../../headers.component.css')],
    providers: [AsScouterService, LocationService]
})
export class SignAsScouterComponent {
    label: string;
    regNo: string;
    city: string;
    provinces: string[];
    publicEmail: string;
    website: string;
    constructor(locationService: LocationService) {
        this.provinces = locationService.getProvinces();
        alert("MAde");
    }
    chooseCity(value) {
        alert("Called");
    }
}