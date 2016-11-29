import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class LoginService {
    constructor(private http: Http) {}
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
    login(event) {
        var headers = new Headers();
        var body = JSON.stringify("&email=" + event.email.value + "&password=" + event.password.value);
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        console.log("About to make an http request " + body);
        return this.http.post('http://localhost:3000/signin', body, {headers: headers})
            .map(res => res.json(), function(err){
                if (err)
                    console.log("There was an error: " + err);
                else
                    console.log("Successfully sent and a recieved some packets");
            });
    }
}