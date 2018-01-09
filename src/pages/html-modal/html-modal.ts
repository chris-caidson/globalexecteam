import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-html-modal",
  templateUrl: "html-modal.html"
})
export class HtmlModalPage {
  docTitle: string;
  html: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
