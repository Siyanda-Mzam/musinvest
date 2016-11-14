import {Component} from '@angular/core';

@Component({
    selector: 'login',
    template: require('./login.component.html'),
    styles: [require('../sign.component.css'), require('../../headers.component.css')]
})
export class SigninComponent {
    title: string = 'Check what you have been missing';
    body: string = 'Find out who has interest in your craft';
    signInSubHeader: string = 'Look at how far you have come :)';
    head: string = 'Remember';
    summary: string = '... everyone was using tiny brushes and doing watercolors,\
    while Jimi Hendrix was painting galactic scenes in Cinemascope.\
    We are working in a field of mystical resonance, sound and vibration...\
    that\'s what makes people cry, laugh\ and feel their hair stand up ... ';
}