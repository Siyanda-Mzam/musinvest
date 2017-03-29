import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { PageInfoService } from './page-info-service';
import { Observable } from 'rxjs';
@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: [ '../sign.component.scss', '../../shared/styles/animations.css' ],
    providers: [ LoginService, PageInfoService ]
})
export class SigninComponent {
    title: string;
    body: string;
    signInSubHeader: string;
    head: string;
    summary: string;
    loginToken:boolean;
    constructor(private loginService: LoginService) {
        this.title = loginService.getTitle();
        this.body = loginService.getBody();
        this.signInSubHeader = loginService.getSignupSubHeader();
        this.head = loginService.getHead();
        this.summary = loginService.getSummary();
    }
    signIn(event) {
        let obj;
         if (event.email.value && event.password.value){
             this.loginService.login(event).subscribe(res => { this.loginToken = res; });
           if (this.loginToken) {
                console.log("In LoginComponent...loginToken: " + this.loginToken);
           }
           else
                console.log("In LoginComponent...Failed to log");
        }
        else
            console.log("This is should never happen, give me a call immediately");
    }
    turnt(token:boolean){
        console.log("Turnt with token: " + JSON.stringify(this.loginToken));
    }
}