import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { PdfProvider } from "../../../providers/pdf/pdf";
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: "page-compensation-plan",
  templateUrl: "compensation-plan.html"
})
export class CompensationPlanPage {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public pdfProvider: PdfProvider,
    private gap: GoogleAnalyticsProvider,
    public authProvider: AuthProvider
  ) {
    if (!this.authProvider.loggedIn) {
      this.authProvider.previousPage = "CompensationPlanPage";
      this.navCtrl.setRoot("LoginPage");
    }
  }

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "Isagenix Compensation Plan",
      url: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2FIsagenix%20Compensation%20Plan.mp4?alt=media&token=03805889-5eb4-4c93-8bf5-7553bf3eadaa"
    });

    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("CompensationPlanPage");
  }
}
