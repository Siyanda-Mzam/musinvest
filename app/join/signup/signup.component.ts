import {Component} from '@angular/core';

@Component({
    selector: 'signup',
    template: require('./signup.component.html'),
    styles: [require('../sign.component.css')]
})
export class SignupComponent {
    title: string = 'Let\'s get this career to the next level';
    body: string = 'Let\'s take things up a notch. Join us!';
    summary: string = 'is a free online platform built to serve\
    as a common ground of reach between musicians and talent seekers.\
    Artists put up their music on the platform for showcasing to Scouters,\
    and Scouters in return browse, discover and invest in them.\
    Join Musinvest to accelerate your music career. \
    As a scouter, discover talent today and expand your company.';
    signupSubHeader: string = 'Put your 2 cents in and get a buck back:';
    confMsg: string = 'You will receive an email to confirm your part in\
     this venture :)';
}
