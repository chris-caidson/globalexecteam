import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { PdfProvider } from "../../../../../providers/pdf/pdf";
import { GoogleAnalyticsProvider } from './../../../../../providers/google-analytics/google-analytics';

@IonicPage()
@Component({
  selector: 'page-product-b',
  templateUrl: 'product-b.html',
})
export class ProductBPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
    public pdfProvider: PdfProvider, private gap: GoogleAnalyticsProvider) {
  }

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "telomeres":
        data = {
          name: "Telomeres and Aging",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Ftelomeres-and-aging.mp4?alt=media&token=3c9fb188-10ce-467a-8461-abbcd7626219"
        };
        break;

      case "aging-you":
        data = {
          name: "What's Aging You?",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Fwhat's-aging-you.mp4?alt=media&token=e3bda42c-a561-4390-93df-085ce1aacb59"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("ProductBPage");
  }

  goBack() {
    this.navCtrl.pop();
  }
}
