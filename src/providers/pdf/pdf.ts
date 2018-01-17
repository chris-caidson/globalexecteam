import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { AppAvailability } from "@ionic-native/app-availability";
import { Market } from '@ionic-native/market';

@Injectable()
export class PdfProvider {
  constructor(
    public platform: Platform,
    public alertCtrl: AlertController,
    private browser: InAppBrowser,
    private appAvailability: AppAvailability,
    private market: Market
  ) {}

  openPdf(title, path) {
    this.platform.ready().then(() => {
      if (this.platform.is("android")) {
        this.appAvailability
          .check("com.xodo.pdf.reader") //"com.adobe.reader")
          .then(result => { if (result) {
            this.market.open("com.xodo.pdf.reader");
          }});
      };
    });

    this.browser.create(path, "_system", {
      location: "yes",
      hidden: "no",
      clearcache: "yes",
      clearsessioncache: "yes",
      zoom: "yes",
      hardwareback: "yes",
      mediaPlaybackRequiresUserAction: "no",
      shouldPauseOnSuspend: "no",
      closebuttoncaption: "Close",
      disallowoverscroll: "no",
      toolbar: "yes",
      enableViewportScale: "yes",
      allowInlineMediaPlayback: "no",
      presentationstyle: "pagesheet",
      fullscreen: "yes"
    });
  }
}
