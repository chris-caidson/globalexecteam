import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { GoogleAnalyticsProvider } from "./../../../providers/google-analytics/google-analytics";
import { AuthProvider } from '../../../providers/auth/auth';

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
    public modalCtrl: ModalController,
    private gap: GoogleAnalyticsProvider,
    public authProvider: AuthProvider
  ) {
    if (!this.authProvider.loggedIn) {
      this.authProvider.previousPage = "PressReleasesPage";
      this.navCtrl.setRoot("LoginPage");
    }
  }

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

  openPressReleaseForMakeAWish() {
    var data = {
      title:
        "Isagenix Reveals Live Wish at Annual Conference and Raises More Than $100,000 for Make-A-Wish",
      imgUrl: "assets/imgs/misc/make-a-wish.jpg",
      isoDate: "2016-08-31",
      content:
        "<p>Gilbert, Ariz. – August 31, 2016 – Isagenix International, a global health and wellness company, ended " +
        "its annual 2016 “One Team” Celebration event in Las Vegas by raising more than $100,000 for Make-A-Wish® through " +
        "fundraising and generous customer and corporate pledges. Additionally, Isagenix and Make-A-Wish surprised teen Jordyn, " +
        "a 16-year-old battling a rare form of liver cancer, with an onstage wish reveal in front of more than 14,000 " +
        "Associates, employees, and members of the media. Next summer, her wish to travel to London will be granted!</p><p>" +
        "“Our team’s passion for impacting overall health and the well-being of others is reflected in our continued support of " +
        "children’s charities,” says Kathy Coover, Isagenix Co-Founder and Executive Vice President. “We enjoy coming together " +
        "every August to bring happiness and positive experiences for children battling life-threatening medical conditions.”</p>" +
        "<p>Over the past 14 years, Isagenix has raised more than $8 million for children’s charities. This includes more than " +
        "$5 million for Make-A-Wish since 2012, which has helped to grant more than 580 wishes to deserving children in seven " +
        "countries. This year alone, Isagenix has raised more than $2 million for Make-A-Wish. More than 550,000 Members and " +
        "1,000 employees have the opportunity to contribute to Make-A-Wish on an ongoing basis.</p><p>“Isagenix Associates and " +
        "employees remain committed to positively impacting and improving world health through our support of Make-A-Wish " +
        "children to enrich the human experience with hope, strength, and joy,” says Travis Garza, Isagenix Chief Sales and " +
        "Marketing Officer.</p><p>For additional information about Isagenix and its partnership with Make-A-Wish, please visit " +
        "<a href='https://www.isagenix.com/en-us/about-isagenix/giving-back' target='_blank'>Isagenix.com</a>, <a " +
        "href='http://wish.org' target='_blank'>Wish.org</a> or <a href='https://www.worldwish.org/en' target='_blank'>" +
        "WorldWish.org.</a></p>"
    };

    const myModal = this.modalCtrl.create("PressReleaseModalPage", data);
    myModal.present();
  }

  openPressReleaseModal(entry) {
    var data = {
      title: entry.title,
      content: entry.content,
      imgUrl: entry.enclosure.url,
      isoDate: entry.isoDate
    };

    const myModal = this.modalCtrl.create("PressReleaseModalPage", data);
    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("PressReleasesPage");
  }
}
