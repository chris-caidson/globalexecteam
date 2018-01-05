import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-thirty-day-guide",
  templateUrl: "thirty-day-guide.html"
})
export class ThirtyDayGuidePage {
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "shake-day":
        data = {
          name: "How to do a Shake Day",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Fhow-to-do-a-shake-day.mp4?alt=media&token=2015e97e-bb87-4a0c-85ea-9e664ca13a7f"
        };
        break;

      case "cleanse-day":
        data = {
          name: "How to do a Cleanse Day",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Fhow-to-do-a-cleanse-day.mp4?alt=media&token=7e02e057-d60e-47ca-b6cb-763c61ba9e87"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }
}
