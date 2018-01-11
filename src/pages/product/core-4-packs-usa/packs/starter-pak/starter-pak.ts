import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { PdfProvider } from "../../../../../providers/pdf/pdf";

@IonicPage()
@Component({
  selector: 'page-starter-pak',
  templateUrl: 'starter-pak.html',
})
export class StarterPakPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public pdfProvider: PdfProvider) {
  }

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "shake-day":
        data = {
          name: "How to do an Isagenix Shake Day",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Fhow-to-do-a-shake-day.mp4?alt=media&token=2015e97e-bb87-4a0c-85ea-9e664ca13a7f"
        };
        break;

      case "cleanse-day":
        data = {
          name: "How to do an Isagenix Cleanse Day",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Fhow-to-do-a-cleanse-day.mp4?alt=media&token=7e02e057-d60e-47ca-b6cb-763c61ba9e87"
        };
        break;

        case "30-day":
        data = {
          name: "How to Use the 30-Day System",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Fhow-to-use-the-30-day-system.mp4?alt=media&token=ea977e8c-042a-40b8-ac6b-924a6af7152e"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }
}
