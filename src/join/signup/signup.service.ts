import {Injectable} from '@angular/core';

@Injectable()
export class SignupService {
    head = 'MuseInvest';
    title = 'Let\'s get this career to the next level';
    body = 'It\'s either you step forward into growth or step back into safety';
    summary = 'is a free online platform built to serve\
    as a common ground of reach between musicians and talent seekers.\
    Artists put up their music on the platform for showcasing,\
    and Scouters browse, discover and invest in them.';
    join = 'Accelerate the growth of your career with us, today.';
    signupSubHeader = 'Put your 2 cents in and get a buck back:';
    confMsg = 'You will receive an email to confirm your part in\
     this venture';
    roles = ['I am an artist', 'I am a scouter'];
    getHead() {
        return this.head;
    }
    getTitle() {
        return this.title;
    }
    getBody() {
        return this.body;
    }
    getSummary() {
        return this.summary;
    }
    getJoin() {
        return this.join;
    }
    getSignupSubHeader() {
        return this.signupSubHeader;
    }
    getConfMsg() {
        return this.confMsg;
    }
    getRoles() {
        return this.roles;
    }
    setSummary(text: string)
    {
        this.summary = text;
    }
}

@Injectable()
export class AsScouterService {
}

@Injectable()
export class AsArtistService {

}

@Injectable()
export class LocationService {
        provinces = [
        'Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 'Limpopo', 'Mpumalanga',
        'Northern Cape', 'North West', 'Western Cape'];
    getProvinces() {
        return this.provinces;
    }
}