import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-why-cleanse",
  templateUrl: "why-cleanse.html"
})
export class WhyCleansePage {
  year: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewWillLoad() {
    this.year = (new Date()).getFullYear()
  }

  loadProblemPage() {
    this.navCtrl.push('ProblemPage');
  }

  loadSolutionPage() {
    this.navCtrl.push('SolutionPage');
  }
}