import { Component } from '@angular/core';
import {
  UserService
} from 'lib-apis';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'nav-links',
  templateUrl: 'nav-links.html'
})
// tslint:disable-next-line:component-class-suffix
export class NavLinks {
  constructor(public userSrvc: UserService) {
  }
}


