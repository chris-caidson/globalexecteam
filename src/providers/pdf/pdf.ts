import { Injectable } from "@angular/core";
import { DocumentViewer, DocumentViewerOptions } from "@ionic-native/document-viewer";

@Injectable()
export class PdfProvider {
  constructor(public docViewer: DocumentViewer) {}

  openPdf(title, path) {
    console.log("Title: " + title);
    console.log("Path: " + path);

    var options: DocumentViewerOptions = { title: title }
    this.docViewer.viewDocument(path, "application/pdf", options);
  }
}
