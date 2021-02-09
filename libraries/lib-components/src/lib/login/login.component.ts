import { Component } from '@angular/core';
import {
  UserService,
} from 'lib-apis';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  randomVariable = false;

  constructor(public userSrvc: UserService) {
    this.randomVariable = Math.random() >= 0.5;
  }

}
