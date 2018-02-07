import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: "page-meet-our-cofounder",
  templateUrl: "meet-our-cofounder.html"
})
export class MeetOurCofounderPage {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private gap: GoogleAnalyticsProvider,
    public authProvider: AuthProvider) {
      if (!this.authProvider.loggedIn) {
        this.authProvider.previousPage = "MeetOurCofounderPage";
        this.navCtrl.setRoot("LoginPage");
      }
    }

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "Meet Our Co-Founder - Kathy Coover",
      url: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2FSusan%20Miller%20with%20Kathy%20Coover%20-%20How%20Isagenix%20Got%20it%20Right!.mp4?alt=media&token=28709de7-7a37-495e-af39-022f14ee02c3"
    });

    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("MeetOurCofounderPage");
  }
}
