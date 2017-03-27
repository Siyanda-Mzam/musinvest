import { Component } from '@angular/core';
import { LoginService } from '../join/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../headers.component.css'],
  providers: [ LoginService ]
})
export class AppComponent {
  title = 'app works!';
  constructor(private loginService: LoginService) {}
}
