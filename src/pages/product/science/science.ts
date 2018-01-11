import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PdfProvider } from '../../../providers/pdf/pdf';

@IonicPage()
@Component({
  selector: "page-science",
  templateUrl: "science.html"
})
export class SciencePage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public pdfProvider: PdfProvider) {}
}
