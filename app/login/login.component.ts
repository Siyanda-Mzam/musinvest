import {Component} from '@angular/core';

@Component({
    selector: 'login',
    template: require('./login.component.html')
})
export class SigninComponent {
    title: string = 'Check what have you been missing';
    body: string = 'Find out who has shown interest in your craft'; 
}