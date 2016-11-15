import {Component} from '@angular/core';
import {LoginService} from './login.service';

@Component({
    selector: 'login',
    template: require('./login.component.html'),
    styles: [
        require('../sign.component.css'),
        require('../../headers.component.css')
        ],
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