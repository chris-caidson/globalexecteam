import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { PdfProvider } from "../../../providers/pdf/pdf";
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';
import { AuthProvider } from './../../../providers/auth/auth';

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
    public auth: AuthProvider
  ) { }

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "Isagenix Compensation Plan",
      url: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fcomp-plan-with-jim-coover.mp4?alt=media&token=ffc3c5a0-db68-467a-8456-4caba12b0645"
    });

    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("CompensationPlanPage");
  }
}
