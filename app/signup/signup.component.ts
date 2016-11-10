import {Component} from '@angular/core';

@Component({
    selector: 'signup',
    template: require('./signup.component.html')
})
export class SignupComponent {
    title: string = 'Let\'s get this career to the next level';
    body: string = 'Sign up today and stand a chance to be invested on';
}
