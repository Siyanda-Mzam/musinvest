import { Injectable } from '@angular/core';
import { PageInfoService } from './page-info-service';

@Injectable()
export class SignupService {
    head : string; title : string; body : string; summary  : string; join : string;
    signupSubHeader : string; confMsg : string; roles : string[];
    constructor(private pageInfoService: PageInfoService) {
        this.head = pageInfoService.getHead();
        this.title = pageInfoService.getTitle();
        this.summary = pageInfoService.getSummary();
        this.body = pageInfoService.getBody();
        this.join = pageInfoService.getJoin();
        this.signupSubHeader = pageInfoService.getSignupSubHeader();
        this.confMsg = pageInfoService.getConfMsg();
        this.roles = pageInfoService.getRoles();
    }
}

@Injectable()
export class AsScouterService {
}

@Injectable()
export class AsArtistService {

}

@Injectable()
export class LocationService {
        provinces = [
        'Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 'Limpopo', 'Mpumalanga',
        'Northern Cape', 'North West', 'Western Cape'];
    getProvinces() {
        return this.provinces;
    }
}