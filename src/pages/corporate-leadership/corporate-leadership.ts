import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-corporate-leadership",
  templateUrl: "corporate-leadership.html"
})
export class CorporateLeadershipPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CorporateLeadershipPage");
  }
}
