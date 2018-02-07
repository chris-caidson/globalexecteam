import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider) {
  }

  public login()
  {
    this.authProvider.login(this.password);

    if (this.authProvider.loggedIn) {
      this.navCtrl.setRoot(this.authProvider.previousPage);
    }
  }
}
