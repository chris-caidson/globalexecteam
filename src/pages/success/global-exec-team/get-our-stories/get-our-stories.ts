import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { GoogleAnalyticsProvider } from './../../../../providers/google-analytics/google-analytics';

@IonicPage()
@Component({
  selector: "page-get-our-stories",
  templateUrl: "get-our-stories.html"
})
export class GetOurStoriesPage {
  opportunityVisible: boolean = true;
  productVisible: boolean = false;

  opportunityStories: Array<{ title: string; url: string; image: string }>;
  productStories: Array<{ title: string; url: string; image: string }>;

  baseUrl: string = "http://w.soundcloud.com/player?url=https://soundcloud.com/";
  imagePath: string = "../../../../assets/imgs/sound-cloud/";

  queryString: string = "&amp;color=75c043&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;" +
    "show_user=false&amp;start_track=0&amp;show_playcount=true&amp;show_artwork=true&amp;buying=false&amp;download=false" +
    "&amp;liking=true&amp;sharing=false&amp;show_reposts=false";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private gap: GoogleAnalyticsProvider
  ) {
    console.log(`${this.imagePath}opportunity-01.jpg`);

    this.opportunityStories = [
      {
        title: "Three Women Share Their Success Stories",
        url: "user-940323348/susan-miller-jessica-johnston-and-deanna-falchook",
        image: `${this.imagePath}opportunity-01.jpg`
      },
      {
        title: "Successful Entrepreneur Shares WHY He Loves Network Marketing",
        url:
          "user-297693051-59186954/validation-call-with-successful-business-owner-and-entrepreneur",
        image: `${this.imagePath}opportunity-02.jpg`
      },
      {
        title: "Holistic Nutrition Writer Explains WHY Isagenix",
        url:
          "user-750713208/holistic-nutrition-writer-delialah-lotich-shares-her-knowledge",
        image: `${this.imagePath}opportunity-03.jpg`
      },
      {
        title: "22-Year-Old College Graduate Excels in Isagenix",
        url: "user-43669633/22-year-old-college-student-shares-her-why",
        image: `${this.imagePath}opportunity-04.jpg`
      },
      {
        title: "Adoptive Mother of 7 Creates 6 Figures in 6 Months",
        url: "user-43669633/adoptive-mother-of-7-creates-6-figures-in-6-months",
        image: `${this.imagePath}opportunity-05.jpg`
      },
      {
        title: "From Corporate America to 'Momprenuer'",
        url: "user-297693051-59186954/elizabeth-leconey",
        image: `${this.imagePath}opportunity-06.jpg`
      },
      {
        title: "Successful Businessman Chooses Isagenix",
        url: "user-297693051-59186954/successful-businessman-chooses-isagenix",
        image: `${this.imagePath}opportunity-07.jpg`
      },
      {
        title: "Women of Isagenix Share Their WHY",
        url:
          "user-750713208/woman-of-isagenix-share-nina-mccallie-and-renee-shriebman",
        image: `${this.imagePath}opportunity-08.jpg`
      },
      {
        title: "Former Banking Exec Shares Success Story",
        url: "user-928086559/jessica-johnston-top-10-to-explode-your-business",
        image: `${this.imagePath}opportunity-09.jpg`
      },
      {
        title: "Professional Network Marketer Explains the Industry",
        url: "user-750713208/professional-nwmr-explains-the-industry",
        image: `${this.imagePath}opportunity-10.jpg`
      },
      {
        title: "Australian Businessman Travels Worldwide",
        url:
          "user-750713208/australian-business-man-travels-worldwide-building-isagenix",
        image: `${this.imagePath}opportunity-11.jpg`
      },
      {
        title: "Mother of 7, Grandmother of 10, Secures Future",
        url:
          "user-750713208/mother-of-7-grandmother-of-10-and-industry-bulding-her-childrens-future",
        image: `${this.imagePath}opportunity-12.jpg`
      },
      {
        title: "Professional Network Marketers Choose Isagenix",
        url: "user332863848/why-isagenix-now-johnnie-and-rachel-davis",
        image: `${this.imagePath}opportunity-13.jpg`
      },
      {
        title: "Corporate Moms Take on Network Marketing",
        url:
          "user-940323348/corporate-moms-take-on-network-marketing-renee-schreibman-and-amanda-smith",
        image: `${this.imagePath}opportunity-14.jpg`
      },
      {
        title: "Men in Isagenix Share Their Thoughts on Industry",
        url:
          "user-940323348/men-in-isagenix-share-their-thoughts-on-the-industry-todd-lotich-and-herb-cepeda",
        image: `${this.imagePath}opportunity-15.jpg`
      }
    ];

    this.productStories = [
      {
        title: "Shannon Adee - Amazing Weight Loss Story",
        url: "user-995485347/shannon-adee-amazing-weight-loss-stroy",
        image: `${this.imagePath}product-01.jpg`
      },
      {
        title: "Dr. Tony O’Donnel – Fruits and Greens",
        url:
          "user-136842156/dr-tony-odonnel-formulator-of-isagreens-and-isafruits",
        image: `${this.imagePath}product-02.jpg`
      },
      {
        title: "Jessica Johnston – Auto-Immune Survivor",
        url: "user-136842156/jessica-johnston-auto-immune-survivor",
        image: `${this.imagePath}product-03.jpg`
      },
      {
        title: "Nina McCallie Shares the Power of Our Products",
        url:
          "user-136842156/nina-mccallie-nwm-expert-shares-the-power-of-our-products-and-systems",
        image: `${this.imagePath}product-04.jpg`
      },
      {
        title: "Kelly Campbell and Tracie Taylor",
        url: "user-995485347/kelly-cambell-and-tracie-taylor",
        image: `${this.imagePath}product-05.jpg`
      },
      {
        title: "Elaine Moody and Kim Wojnowich",
        url: "user-995485347/kim-wojnowich-and-elaine-moddy",
        image: `${this.imagePath}product-06.jpg`
      },
      {
        title: "Carol Elizabeth and Jessica Johnston",
        url: "user-995485347/jessica-johnston-and-carol-elizabeth",
        image: `${this.imagePath}product-07.jpg`
      },
      {
        title: "Kim Wojnowich - Why We Cleanse",
        url:
          "user-870488889/health-educators-share-why-we-need-nutritional-cleansing-kim-wojnowich-and-karen-clark",
        image: `${this.imagePath}product-08.jpg`
      }
    ];
  }

  showOpportunity() {
    this.productVisible = false;
    this.opportunityVisible = true;
  }

  showProduct() {
    this.productVisible = true;
    this.opportunityVisible = false;
  }

  openSoundCloudModal(title: string, url: string) {
    const myModal = this.modalCtrl.create("SoundCloudModalPage", {
      title: title,
      url: url
    });

    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("OurStoriesPage");
  }
}
