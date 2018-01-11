import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  DocumentViewer,
  DocumentViewerOptions
} from "@ionic-native/document-viewer";

@IonicPage()
@Component({
  selector: 'page-premium-pak',
  templateUrl: 'premium-pak.html',
})
export class PremiumPakPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public docViewer: DocumentViewer) {
  }

  openPdf(pdfFile: string, pdfTitle: string) {
    var options: DocumentViewerOptions = { title: pdfTitle }
    this.docViewer.viewDocument(pdfFile, "application/pdf", options);
  }
}
