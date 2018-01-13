import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";

declare var RSSParser;

@IonicPage()
@Component({
  selector: "page-press-releases",
  templateUrl: "press-releases.html"
})
export class PressReleasesPage {
  rssFeedUrl: string = "https://newsroom.isagenix.com/feed/en-us";
  entries: Array<any> = [];
  hasEntries: boolean = false;
  snippetLength: number = 300;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    this.parseUrl();
  }

  parseUrlWrapper() {
    return new Promise((resolve, reject) => {
      RSSParser.parseURL(this.rssFeedUrl, function(err, parsed) {
        if (err) {
          reject(err);
        }
        resolve(parsed.feed.entries);
      });
    });
  }

  parseUrl() {
    this.parseUrlWrapper().then((entries: Array<any>) => {
      this.entries = entries;

      for (let e of entries) {
        e.contentSnippet =
          e.contentSnippet.substring(0, this.snippetLength) + "...";
      }

      this.hasEntries = true;
    });
  }

  openPressReleaseModal(entry) {
    var data = {
      title: entry.title,
      content: entry.content,
      imgUrl: entry.enclosure.url
    };

    const myModal = this.modalCtrl.create("PressReleaseModalPage", data);
    myModal.present();
  }
}
