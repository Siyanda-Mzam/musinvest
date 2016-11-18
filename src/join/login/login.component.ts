import {Component} from '@angular/core';
import {LoginService} from './login.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['../sign.component.css', '../../headers.component.css'],
    providers: [LoginService]
})
export class SigninComponent {
    title: string;
    body: string;
    signInSubHeader: string;
    head: string;
    summary: string;
    constructor(loginService: LoginService) {
        this.title = loginService.getTitle();
        this.body = loginService.getBody();
        this.signInSubHeader = loginService.getSignupSubHeader();
        this.head = loginService.getHead();
        this.summary = loginService.getSummary();
    }
}