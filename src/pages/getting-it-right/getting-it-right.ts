import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {
  DocumentViewer,
  DocumentViewerOptions
} from "@ionic-native/document-viewer";

@IonicPage()
@Component({
  selector: "page-getting-it-right",
  templateUrl: "getting-it-right.html"
})
export class GettingItRightPage {
  canLoadPdf: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public docViewer: DocumentViewer
  ) {}

  docOptions: DocumentViewerOptions = {
    title: "PDF Document"
  };

  openPdf(pdfFile: string) {
    if (this.docViewer.canViewDocument(pdfFile, "application/pdf", this.docOptions)) {
      this.canLoadPdf = true;
    }

    this.docViewer.viewDocument(pdfFile, "application/pdf", this.docOptions);
  }
}
