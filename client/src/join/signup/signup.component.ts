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
    fname: string; lname: string; role:string; object: any;
    constructor(private signupService: SignupService) {
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
        return this.role = value;
    }
    joinUs(event) {
        if (this.role == this.roles[1])
            this.object = new Scouter(event.fname.value, event.lname.value, event.email.value, event.pword.value, this.role);
        else if (this.role == this.roles[0])
            this.object = new Artist(event.fname.value, event.lname.value, event.email.value, event.pword.value, this.role);
        console.log("Here we log again " + JSON.stringify(this.signupService.addMember(this.object)));
         //  this.role == this.roles[1] ? location.href = '/signup/as-scouter' : location.href = '/signup/as-artist';
    }
}

abstract class Person {
    name: string;
    surname: string;
    email: string;
    password: string;
    role: string;
    constructor(name:string, surname:string, email:string, password:string, role:string) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        role ? this.role = role : this.role = null;
    }
}


@Component({
    selector: 'as-artist',
    templateUrl: './as-artist.component.html',
    styleUrls: ['../sign.component.css', '../../headers.component.css'],
    providers: [AsArtistService, LocationService]
})
export class Artist extends Person {
    alias: string;
    origin: string;
    contact: number;
    constructor(name:string, surname:string, email:string, password:string, role:string) {
        super(name, surname, email, password, role);
    }
    chooseCity(value) {
        this.origin = value;
    }
}


@Component({
    selector: 'as-scouter',
    templateUrl: './as-scouter.component.html',
    styleUrls: ['../sign.component.css', '../../headers.component.css'],
    providers: [AsScouterService, LocationService]
})
export class Scouter extends Person {
    label: string;
    regNo: string;
    city: string;
    provinces: string[];
    publicEmail: string;
    website: string;
    constructor(name:string, surname:string, email:string, password:string, role:string) {
        super(name, surname, email, password, role);
    }
}