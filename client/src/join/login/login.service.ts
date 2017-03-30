import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { PageInfoService } from './page-info-service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
    public token = "";
    constructor(private http: Http, private pageInfoService: PageInfoService) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    title = this.pageInfoService.getTitle();
    body = this.pageInfoService.getBody();
    signInSubHeader = this.pageInfoService.getSignInSubHeader();
    head = this.pageInfoService.getHead();
    summary = this.pageInfoService.getSummary();
    getTitle() { return this.title; }
    getBody() { return this.body; }
    getSignupSubHeader() { return this.signInSubHeader; }
    getHead() { return this.head; }
    getSummary() { return this.summary; }
    login(event:any) : Observable<boolean> {
        let obj,
        headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin' : '*', 'Authorisation': 'Bearer ' + this.token}),
            body = "&email=" + event.email.value + "&password=" + event.password.value;
        console.log("In LoginService, pre HTTP request with body " + body);
        return this.http.post('http://localhost:4500/signin', body, {headers: headers})
            .map(res => {
                let token = res.json() && res.json().token;
                if (token) {
                    console.log("In LoginService...Printing `token`: " + token);
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify(event.email.value, token));
                    console.log("Successfully logged in");
                    return true;
                }
                else {
                    console.log("Could not log the user");                                                                                                                                                                                                                                                  return false
                }
            });
    }
    isLoggedIn() { return this.token !== null ? true : false}
    logout() {
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}