import { Component, OnInit, Inject } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
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
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
  ) {


    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
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



