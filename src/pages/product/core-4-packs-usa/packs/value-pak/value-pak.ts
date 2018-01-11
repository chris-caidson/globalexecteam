import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  DocumentViewer,
  DocumentViewerOptions
} from "@ionic-native/document-viewer";

@IonicPage()
@Component({
  selector: 'page-value-pak',
  templateUrl: 'value-pak.html',
})
export class ValuePakPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public docViewer: DocumentViewer) {
  }

  openPdf(pdfFile: string, pdfTitle: string) {
    var options: DocumentViewerOptions = { title: pdfTitle }
    this.docViewer.viewDocument(pdfFile, "application/pdf", options);
  }
}
