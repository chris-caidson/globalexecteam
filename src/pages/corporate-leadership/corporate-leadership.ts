import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-corporate-leadership",
  templateUrl: "corporate-leadership.html"
})
export class CorporateLeadershipPage {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {}

  openPersonModal(person: string) {
    var data: any;

    switch (person) {
      case "jim-coover":
        data = {
          personName: "Jim Coover",
          personTitle: "Co-Founder and Chief Executive Officer",
          imageSrc: "../../assets/imgs/company/jim-coover.jpg",
          details:
            "With more than 35 years’ experience, Jim Coover is widely considered a pioneer in the weight-loss and nutrition " +
            "industry. He successfully led numerous network marketing companies throughout his career, serving more than 7 " +
            "million customers and exceeding $1 billion in sales. In 2001, Jim and his wife, expert network marketer Kathy, " +
            "left retirement to link arms with John Anderson to co-found Isagenix in pursuit of a vision to impact world health " +
            "and free people from physical and financial pain. At Isagenix, Jim has been instrumental in creating the " +
            "architecture of one of the most generous, simple, and effective compensation plans in the industry."
        };
        break;

      case "kathy-coover":
        data = {
          personName: "Kathy Coover",
          personTitle: "Co-Founder and Executive Vice President",
          imageSrc: "../../assets/imgs/company/kathy-coover.jpg",
          details:
            "In 1990, Kathy Coover left her career as a dental hygienist in search of a way to spend more time with her " +
            "family and contribute to others on a greater scale. Kathy went on to become a top earner in three separate " +
            "network marketing companies, generating millions in income and helping tens of thousands of entrepreneurs " +
            "achieve success.<p>Remaining focused on her aspirations to positively impact the lives of others, Kathy " +
            "joined her husband, Jim, and together they co-founded Isagenix. They set out to build a network marketing " +
            "company that would be different than all the rest, founded on integrity, passion, and collaboration.</p> " +
            "<p>Kathy is a nationally recognized and respected leader who has translated her personal achievements into " +
            "training and support systems that have helped create physical and financial success for countless Isagenix " +
            "Associates."
        };
        break;
    }

    const myModal = this.modalCtrl.create("PersonModalPage", data);
    myModal.present();
  }
}
