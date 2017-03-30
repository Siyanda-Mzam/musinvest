import { Injectable } from '@angular/core';
import { PageInfoService } from './page-info-service';
import { Http, Request, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SignupService {
    head : string; title : string; body : string; summary  : string; join : string;
    signupSubHeader : string; confMsg : string; roles : string[];
    constructor(private pageInfoService: PageInfoService, private http: Http) {
        this.head = pageInfoService.getHead();
        this.title = pageInfoService.getTitle();
        this.summary = pageInfoService.getSummary();
        this.body = pageInfoService.getBody();
        this.join = pageInfoService.getJoin();
        this.signupSubHeader = pageInfoService.getSignupSubHeader();
        this.confMsg = pageInfoService.getConfMsg();
        this.roles = pageInfoService.getRoles();
    }
    addMember(object: any) {
        var headers = new Headers();
        var body = "&name=" + object.name + "&surname=" + object.surname +
        "&email=" + object.email + "&password=" + object.password + "&role=" + object.role;
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        console.log("About to make an http request " + body);
        return this.http
            .post('http://localhost:4500/signup', body.toString(), {headers: headers})
            .map((res: Response) => {   
                return res.json()
            });
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