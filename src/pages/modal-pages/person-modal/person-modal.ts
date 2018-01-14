import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';

@IonicPage()
@Component({
  selector: 'page-person-modal',
  templateUrl: 'person-modal.html',
})
export class PersonModalPage {
  personName: string;
  personTitle: string;
  imageSrc: string;
  details: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, private gap: GoogleAnalyticsProvider) {
  }

  ionViewWillLoad() {
    this.personName = this.navParams.get("personName");
    this.personTitle = this.navParams.get("personTitle");
    this.imageSrc = this.navParams.get("imageSrc");
    this.details = this.navParams.get("details");

    this.gap.trackView("PersonModalPage");
    this.gap.trackEvent("Opened Modal", `Loaded ${this.personName}`, "Person");
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
