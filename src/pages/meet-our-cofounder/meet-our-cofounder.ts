import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-meet-our-cofounder",
  templateUrl: "meet-our-cofounder.html"
})
export class MeetOurCofounderPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MeetOurCofounderPage");
  }
}
