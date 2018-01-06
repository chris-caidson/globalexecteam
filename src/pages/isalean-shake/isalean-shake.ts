import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-isalean-shake',
  templateUrl: 'isalean-shake.html',
})
export class IsaleanShakePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
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
