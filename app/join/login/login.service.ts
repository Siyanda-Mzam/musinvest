import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {
    title = 'Check what you have been missing';
    body = 'Find out who has interest in your craft';
    signInSubHeader = 'Look at how far you have come :)';
    head = 'Remember';
    summary = '... everyone was using tiny brushes and doing watercolors,\
    while Jimi Hendrix was painting galactic scenes in Cinemascope.\
    We are working in a field of mystical resonance, sound and vibration...\
    that\'s what makes people cry, laugh\ and feel their hair stand up ... ';
    getTitle() {
        return this.title;
    }
    getBody() {
        return this.body;
    }
    getSignupSubHeader() {
        return this.signInSubHeader;
    }
    getHead() {
        return this.head;
    }
    getSummary() {
        return this.summary;
    }
}