import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import * as Parse from 'parse';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => 
    {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      await defineCustomElements(window);
      
      Parse.initialize('dhiINCCaCvB6ZCt7GwkPqDX6F9TPGFkVC9jU27Ra', 'hdWMfm3w1MSqbvJzr9qGDPXfq6pfD8pq59PMS9MJ');
      (Parse as any).serverURL = 'https://parseapi.back4app.com/';

      
    });
  }
}
