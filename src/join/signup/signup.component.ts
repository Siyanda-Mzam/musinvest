import { Component } from '@angular/core';
import { SignupService, AsScouterService, AsArtistService, LocationService } from './signup.service';

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['../sign.component.css', '../../headers.component.css'],
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
        this.role = 'I am an artist';
    }
    private asRole(value){
        this.role = value;
    }
    private joinUs()
    {
        if (this.role == 'I am a scouter')
         location.href = '/signup/as-scouter';
        else if (this.role == 'I am an artist')
            location.href = '/signup/as-artist';
        else
            location.href = '/';
    }
}
@Component({
    selector: 'as-artist',
    templateUrl: './as-artist.component.html',
    styleUrls: ['../sign.component.css', '../../headers.component.css'],
    providers: [AsArtistService, LocationService]
})
export class SignAsArtistComponent {
    alias: string;
    origin: string;
    contact: number;
}
@Component({
    selector: 'as-scouter',
    templateUrl: './as-scouter.component.html',
    styleUrls: ['../sign.component.css', '../../headers.component.css'],
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