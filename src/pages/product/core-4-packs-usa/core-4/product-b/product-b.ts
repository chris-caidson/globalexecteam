import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { PdfProvider } from "../../../../../providers/pdf/pdf";

@IonicPage()
@Component({
  selector: 'page-product-b',
  templateUrl: 'product-b.html',
})
export class ProductBPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public pdfProvider: PdfProvider) {
  }

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "":
        data = {
          name: "",
          url:
            ""
        };
        break;

      case "":
        data = {
          name: "",
          url:
            ""
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }
}