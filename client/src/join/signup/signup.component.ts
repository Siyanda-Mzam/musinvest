import { Component } from '@angular/core';
import { SignupService, AsScouterService, AsArtistService, LocationService } from './signup.service';
import { PageInfoService } from './page-info-service';

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['../sign.component.css', '../../headers.component.css'],
    providers: [SignupService, PageInfoService]
})
export class SignupComponent {
    head: string; title: string; body: string; summary: string; join: string;
    signupSubHeader: string; confMsg: string; roles: string[]; email: string;
    fname: string; lname: string; role:string;
    constructor(signupService: SignupService) {
        this.head = signupService.head;
        this.body = signupService.body;
        this.title = signupService.title;
        this.summary = signupService.summary;
        this.join = signupService.join;
        this.signupSubHeader = signupService.signupSubHeader;
        this.confMsg = signupService.confMsg;
        this.roles = signupService.roles;
        this.role = this.roles[0];
    }
    asRole(value){
        this.role = value;
        alert(value);
    }
    joinUs(event)
    {
        //event.preventDefault();
     //   alert(event.fname);
        console.log(event.email.value);
        console.log(event.fname.value);
        console.log(event.pword.value);
        /*if (this.role == this.roles[1])
         location.href = '/signup/as-scouter';
        else if (this.role == this.roles[0])
            location.href = '/signup/as-artist';
        else
            location.href = '/';*/
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
        alert("Successfully injected the Location Service");
    }
    chooseCity(value) {
        alert("Called");
    }
}