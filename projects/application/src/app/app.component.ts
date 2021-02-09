import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {


  public selectedIndex = 0;
  preventNavToHome = false;
  platformReadyResolver;
  platformReadyPromise = new Promise((resolve, reject) => {
    this.platformReadyResolver = resolve;
  });
  public appPages: any = [];
  userLoginStatus = 'logged-out';




  constructor(
    public router: Router,
  ) {


    this.initializeApp();
  }

  initializeApp() {

  }

  ngOnInit() {
    this.appPages = [
      { icon: 'home', iconColor: 'blue', enable: true, title: 'Login', url: '/login' }
    ];
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }


  openPage(page, params?) {
    if (page.url) {
      return this.router.navigate([`/${page.url}`], params);
    }
  }

}



