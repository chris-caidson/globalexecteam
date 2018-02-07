import { ViewChild, Component } from "@angular/core";
import {
  Content,
  IonicPage,
  NavController,
  ModalController
} from "ionic-angular";
import { GoogleAnalyticsProvider } from "./../../../../providers/google-analytics/google-analytics";
import { AuthProvider } from '../../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: "page-get-our-team",
  templateUrl: "get-our-team.html"
})
export class GetOurTeamPage {
  @ViewChild(Content) content: Content;

  millionairesVisible: boolean = true;
  leadersVisible: boolean = false;
  start1000Visible: boolean = false;
  teamIsagenixVisible: boolean = false;

  millionaires: Array<{
    name: string;
    imageUrl: string;
    title: string;
    isaFyiUrl: string;
    details: string;
  }>;

  leaders: Array<{
    name: string;
    imageUrl: string;
    title: string;
    details: string;
    recognitionName?: string;
  }>;

  start1000: Array<{
    name: string;
    imageUrl: string;
    title: string;
    details: string;
  }>;

  teamIsagenix: Array<{
    name: string;
    imageUrl: string;
    title: string;
    details: string;
    recognitionUrl?: string;
    recognitionName?: string;
  }>;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private gap: GoogleAnalyticsProvider,
    public authProvider: AuthProvider
  ) {
    if (!this.authProvider.loggedIn) {
      this.authProvider.previousPage = "GetOurTeamPage";
      this.navCtrl.setRoot("LoginPage");
      return;
    }

    this.initializeMillionaires();
    this.initializeLeaders();
    this.initializeStart1000();
    this.initializeTeamIsagenix();
  }

  hideAllSections() {
    this.millionairesVisible = false;
    this.leadersVisible = false;
    this.start1000Visible = false;
    this.teamIsagenixVisible = false;
  }

  showMillionaires() {
    this.hideAllSections();
    this.millionairesVisible = true;
    document.getElementById('scrollTop').scrollIntoView();
  }

  showLeaders() {
    this.hideAllSections();
    this.leadersVisible = true;
    document.getElementById('scrollTop').scrollIntoView();
  }

  showStart1000() {
    this.hideAllSections();
    this.start1000Visible = true;
    document.getElementById('scrollTop').scrollIntoView();
  }

  showTeamIsagenix() {
    this.hideAllSections();
    this.teamIsagenixVisible = true;
    document.getElementById('scrollTop').scrollIntoView();
  }

  openPage(name: string) {
    console.log(name);
    switch (name) {
      case "Susan and Murray Miller":
        this.navCtrl.push("SusanMillerPage");
        break;

      case "Jessica and Joe Johnston":
        this.navCtrl.push("JessicaJohnstonPage");
        break;

      case "Carolyn and Kiel Tweitmeyer":
        this.navCtrl.push("KielAndCarolynPage");
        break;

      case "Natalie Jill":
        this.navCtrl.push("NatalieJillPage");
        break;

      case "Deanna and Mark Falchook":
        this.navCtrl.push("MarkAndDeannaPage");
        break;

      case "Adam Ciarla":
        this.navCtrl.push("AdamCiarlaPage");
        break;

      case "Helen Costa Giles":
        this.navCtrl.push("IsabodyChampionHelenCostaGilesPage");
        break;

      case "Carol Elizabeth":
        this.navCtrl.push("HeartOfIsaCarolElizabethPage");
        break;

      case "Adrienne Donovan":
        this.navCtrl.push("HeartOfIsaAdrienneDonovanPage");
        break;
    }
  }

  ionViewWillLoad() {
    this.gap.trackView("OurTeamPage");
  }

  openPersonModal(item: any) {
    var data: any = {
      personName: item.name,
      personTitle: item.title,
      imageSrc: item.imageUrl,
      details: item.details
    };

    const myModal = this.modalCtrl.create("PersonModalPage", data);
    myModal.present();
  }

  initializeMillionaires() {
    this.millionaires = [
      {
        name: "Susan and Murray Miller",
        imageUrl: "assets/imgs/team/susan-and-murray-miller.jpg",
        title: "Isagenix Millionaires #144",
        isaFyiUrl: "",
        details:
          "<p><strong>Susan Miller – Residual Income Expert, #144 Isagenix Millionaire, Top 100 Income Earner</strong>" +
          "</p><p><strong>Murray Miller – Successful Business Owner / Entrepreneur</strong></p>Susan and her husband, Murray, " +
          "are the parents of two and live in Foxborough, MA, the home of their favorite professional football team, the New " +
          "England Patriots. Susan and Murray have owned both traditional and NWM businesses and have excelled in both. However, " +
          "if asked, they will tell you the RESIDUAL INCOME derived from building a network of consumers trumps all. Susan began " +
          "her career in the salon industry as a hairdresser and evolved into owning a successful cosmetics and organic skin " +
          "care company. In her late 20's, Susan was introduced to the Network Marketing industry, and within a year, with a " +
          "part-time effort, she replaced the six-figure incomes of both her and her husband's businesses. This resulted in Susan " +
          "and Murray selling their companies and becoming full-time marketers who traveled the world building and supporting " +
          "their networks. Even though they became Industry Millionaires, they ultimately left the industry for 15 years after " +
          "realizing the compensation structure of MLM did not duplicate throughout their network. Not until Isagenix " +
          "Co-Founder Kathy Coover explained how ISAGENIX GOT IT RIGHT, did they return to the industry they loved. Within " +
          "three years they became the 144th Isagenix Millionaires and locked arms with their Team Leaders to spearhead the " +
          "Global Exec Team to turn the company mission statement into a movement. Their daughter, Chelsea Lauren, joined them " +
          "upon graduating college with honors, and today is a START 1000 member and Top 10 Income earner under 25 years old. " +
          "Together as a family, they are building a tremendous legacy that will impact their family and industry for " +
          "generations to come."
      },
      {
        name: "Jessica and Joe Johnston",
        imageUrl: "assets/imgs/team/jessica-and-joe-johnston.jpg",
        title: "Isagenix Millionaires #157",
        isaFyiUrl: "",
        details:
          "Jessica and Joe Johnston live in Charlotte, NC with their beautiful 3 girls. Jessica began her Isagenix " +
          "journey as a solution to her chronic health challenges over a 14-year period. The results were dramatic and validated " +
          "the concept of sharing Isagenix as a supplemental income opportunity. Over a four-year period, Jessica intentionally " +
          "shared the products and the business model, thereby growing her and her husband's business to a multi-million dollar " +
          "cumulative income that continues to grow exponentially. The biggest surprise to both her and Joe is the flexibility " +
          "that this opportunity offers. Jessica is a full-time mom first and foremost. She dissolved three family businesses " +
          "and built Isagenix in the small open pockets in her life. Busy people do amazing in this company and Jessica’s " +
          "mission is to never stop helping people. Jessica shares, “This product is pure brilliance and the most lucrative and " +
          "exciting experience Joe and I have ever seen in our careers.” Jessica continues to build a massive network of happy " +
          "consumers and successful business builders."
      },
      {
        name: "Carolyn and Kiel Tweitmeyer",
        imageUrl: "assets/imgs/team/carolyn-and-kiel-twietmeyer.jpg",
        title: "Isagenix Millionaires #196",
        isaFyiUrl: "",
        details:
          "Carolyn and her husband, Kiel Twietmeyer, live in the sunny panhandle of Florida. They are the proud parents " +
          "of 15 amazing children. They have also been blessed with 5 grandchildren and look forward to many more! Carolyn is a " +
          "stay-at-home mom and homeschools her children. With a vision and a heart of service, she focused her abundant talent " +
          "towards educating and assisting those adopting special-needs children through the nonprofit she founded called " +
          "“Project HOPEFUL.” Always open to helping others, when her friend Deanna shared an opportunity with her called " +
          "'Isagenix', she saw it as a way to impact more people by getting qualified nutrition to struggling children and their " +
          "families by showing them how Isagenix can change their world physically and financially. Isagenix has set them " +
          "physically and financially free! They live and believe, “All for ONE.”"
      },
      {
        name: "Natalie Jill",
        imageUrl: "assets/imgs/team/natalie-jill.jpg",
        title: "Isagenix Millionaire #197",
        isaFyiUrl: "",
        details:
          "Natalie Jill, a successful entrepreneur, is a licensed master sports nutritionist, functional fitness " +
          "trainer, national best-selling author, and the creator of several award-winning DVDs. For years, Natalie Jill used " +
          "and loved the Isagenix products, but as a successful businesswoman managing her own fitness brand, she had no " +
          "interest in the business opportunity. She, as well as her family, are using the Isagenix products and really love " +
          "them. Natalie didn’t want anything to hurt the brand she had worked so hard to develop. She wasn’t public with her " +
          "audience about it for a long time, and initially treated her Isagenix business and her brand as two separate things. " +
          "Natalie no longer stresses if her brand goes a few days without sales, because she knows she can count on her " +
          "Isagenix business. She and her husband, Brooks, are extremely grateful for Isagenix, and say that this opportunity " +
          "has helped them in ways they didn’t expect."
      },
      {
        name: "Deanna and Mark Falchook",
        imageUrl: "assets/imgs/team/deanna-and-mark-falchook.jpg",
        title: "Isagenix Millionaires #200",
        isaFyiUrl: "",
        details:
          "Deanna and her husband, Mark, reside in beautiful, sunny Orlando, Florida with their 7 children. Deanna and " +
          "Mark were successful entertainers in the music industry prior to Isagenix. In 2008, business slowed down and they " +
          "found themselves in the position of looking for another business opportunity. They were in a place of quiet " +
          "desperation and it was their faith and trust in God that brought them to seek out a solution for changing their " +
          "lives. Deanna was looking for better nutrition and financial security for her family during that time, when a " +
          "friend had shared Isagenix with her. Together, Deanna and Mark have created a massive team of moms and dads, " +
          "adoption advocates, and international business builders. Their goal is to help create healthy and prosperous " +
          "'forever families.'"
      },
      {
        name: "Adam Ciarla",
        imageUrl: "assets/imgs/team/adam-ciarla.jpg",
        title: "Isagenix Millionaire #212",
        isaFyiUrl: "",
        details:
          "Adam Ciarla is a single dad looking for time freedom to share with his son. He was introduced to Isagenix, as " +
          "he was in his 15th year of running and owning two personal training studios that both offer one-on-one and small " +
          "group training. He had been looking for a product that would complement his clients’ workouts, so when he stumbled " +
          "upon the Isagenix products at his sister Jessica’s house, he was excited to find that the products were “a match " +
          "made in heaven” for him. Jessica had been trying the products for about two weeks before she told anybody she was " +
          "using them. Adam’s tried his first shake with Vanilla IsaPro®, Isagenix Greens™, Isagenix Fruits™, and Ionix® " +
          "Supreme, and after tasting it, signed up with Isagenix. After clients saw Adam’s results, they were saying, 'Sign me " +
          "up. I need to have what you’re using', and from there, seeing Iagenix from a business perspective, Adam jumped right " +
          "in. But also from a product perspective, he knew he had the perfect audience of 20 to 25 trainers and about 400 " +
          "clients who'd want to try these products. This opportunity has been a tremendous blessing to his son, and he " +
          "couldn’t have done it without the incredible drive and passion of the Global Exec Team."
      },
      {
        name: "Delialah and Todd Lotich",
        imageUrl: "assets/imgs/team/delialah-and-todd-lotich.jpg",
        title: "Isagenix Millionaires #237",
        isaFyiUrl: null,
        details:
          "Delialah and Todd Lotich reside with their beautiful children in Charlotte, NC. As a busy mom and freelancer, Delialah " +
          "had a difficult time releasing the last few pounds of her pregnancy weight. Given Delialah’s health background, she would " +
          "not agree to try any nutritional programs unless they met her strong expectations. When introduced to Isagenix, after " +
          "saying 'no' multiple times, she finally agreed to give it a try after acknowledging the superior ingredients in the food. " +
          "After seeing rapid results in a matter of days, she quickly began sharing with moms and families. Because of the generous " +
          "compensation plan, Delialah was able to free Todd from his corporate position after one year with Isagenix. Together, " +
          "Delialah and Todd were able to take their passion for helping others and grew a multiple six-figure income in just two " +
          "years."
      }
    ];
  }

  initializeLeaders() {
    this.leaders = [
      {
        name: "Susan Lee",
        imageUrl: "assets/imgs/team/sue-lee.jpg",
        title: "Commercial and Residential Real Estate",
        details:
          "Susan and her husband, Rob, live in Attleboro, MA. Susan is a busy mom of three and one who has had the privilege " +
          "of being the primary caregiver to her elderly parents for the past four years. She also has a fast-paced real " +
          "estate career that she balances while focusing on keeping family first. She has been truly blessed, but for some " +
          "reason always felt something was missing. She felt like most working parents: tired, frustrated, always running, " +
          "up early, working late, squeezing in family time here and there, never really getting ahead, never having the time " +
          "to be fully focused on her family. Susan was feeling as though life was passing her by. For years, she had watched " +
          "close friends of theirs, Murray and Susan Miller, live a lifestyle of time-freedom and good fortune. After two " +
          "difficult years in the real estate market, and facing some financial challenges, Susan reached out to the Millers " +
          "and asked Susan Miller to explain to her a little bit more about Isagenix and what it was that drew her back into " +
          "the industry after retiring 15 years earlier. Susan Lee jumped in with both feet and, now two years later, is " +
          "seeing how residual income and serving others will bring her the dream and satisfaction she has always wanted " +
          "- working with whom she wants, when she wants, and spending time with the people she wants to be with most."
      },
      {
        name: "Jennifer Barry",
        imageUrl: "assets/imgs/team/jen-barry.jpg",
        title: "Business Owner, Masters in Finance",
        details:
          "Jennifer and her husband, Phil, live in beautiful Foxborough, MA, with their 2 children. Jennifer is a " +
          "self-motivated and entrepreneurial-minded leader. She has seen the benefits of being her own boss and embraces " +
          "that lifestyle. She began her career working in corporate finance. Jennifer then went on to start a " +
          "multi-million-dollar Internet-based gift basket company which is currently ranked number four in the United States. " +
          "As she continued to see success in her own business, Jennifer was still looking for a source of residual income " +
          "and more time freedom for her and her family. A friend had shared Isagenix with her and she clearly saw the value " +
          "in the products, as she has always had an interest in nutrition and fitness. However, what truly caught her eye was " +
          "the ease of which one could start a business with no investment other than personal consumption as a means of " +
          "creating a significant residual income."
      },
      {
        name: "Liz Lima and Chris Ryan",
        imageUrl: "assets/imgs/team/liz-lima.jpg",
        title:
          "Scientist, Double-Masters in Science, MBA; Senior Software Engineer",
        details:
          "Liz Lima and her husband, Chris Ryan, live in Boston, MA, with their two beautiful children. Liz has had her own " +
          "health and weight struggles. She was considered obese in her early 20s, was diagnosed with high blood pressure, high " +
          "cholesterol, and had constant migraine headaches. She reached a breaking point and decided to change her life once " +
          "and for all. For the past two years, Liz has been coaching clients on nutrition, weight loss, reducing inflammation," +
          "and gaining energy, to name a few. Liz is a self-driven, determined, and highly-focused individual. Liz is able to " +
          "show people her results and validate them via her highly-educated background, which full-heartedly reaffirms how and " +
          "why Isagenix got it right.<p>Like Liz, her husband, Chris, is highly entrepreneurial. Shortly after Liz introduced " +
          "him to Isagenix, he quickly saw the benefits of the nutrition as well as the power of the compensation plan. As a " +
          "Senior Software Engineer, Chis now strives to provide the Global Exec Team with additional tools to make sharing " +
          "Isagenix easier than ever."
      },
      {
        name: "Debra Gebhardt",
        imageUrl: "assets/imgs/team/deb-gebhardt.jpg",
        title: "Network Marketing Industry Expert",
        details:
          "Debra and her husband, Scott, live in Tampa, Florida. Debra’s personal success is nothing less than highly " +
          "accomplished, but what makes her even more successful is the heart of service and leadership that she brings to the " +
          "people she is coaching. Debra has always taken care of herself and made her and her husband’s health a priority. " +
          "Nutrition was non-negotiable, but when a close friend, an Industry Expert as well, shared how Isagenix impacted her " +
          "own health and how the company had GOTTEN IT RIGHT, it was a game changer. Isagenix merged into her values and " +
          "mindset not only physically, but financially too, when she saw the bigger picture of what this company offered. " +
          "It wasn’t even a second thought, that when a company could touch so many people in such a positive way, that Debra " +
          "embraced what she does best and began impacting people. She is now building an amazing tribe of amazing people."
      },
      {
        name: "Judith Libby Froelich",
        imageUrl: "assets/imgs/team/judy-froelich.jpg",
        title: "Marriage and Family Therapist",
        details:
          "Judith and her husband, Keith, live is sunny, beautiful San Diego. In 2012 Keith was diagnosed with a rare form of " +
          "kidney cancer, and through the course of treatment over the following two years, had developed a large amount of " +
          "visceral fat. During Keith’s second kidney surgery, the visceral fat caused the surgery to take more than three times " +
          "longer, with four times the typical blood loss, as compared to the first surgery the prior year. Luckily, Judith and " +
          "Keith were introduced to Isagenix in August of 2014 after reconnecting with a friend. They found incredible results " +
          "after consuming the 30-day weight loss pack in September of 2014. Judith lost 30 pounds and Keith lost 25 pounds. The " +
          "Froelich's have continued a maintenance plan ever since. The truly remarkable result was in February of 2015, during " +
          "post-surgical follow up, when Keith’s MRI showed a decrease of 28% visceral fat. Judith and Keith became product users " +
          "for life and immediately made the commitment to share their story to help those who needed help and who wanted to have " +
          "optimal health and wellness. They have optimal health today and get paid to help others - a true a blessing! Judith " +
          "and Keith love Isagenix - the people and products are just amazing!"
      },
      {
        name: "E.Z. Smith",
        imageUrl: "assets/imgs/team/ez-smith.jpg",
        title: "Personal Trainer",
        details:
          "E.Z. and his wife, Janna, live in Charlotte, NC, with their tho beautiful children. E.Z. is a prominent personal " +
          "trainer within the Charlotte area. He is the owner of Metro Fitness 51, Charlotte’s premier Private and Small Group " +
          "training facility. He has been a gym own for seven years and was a college and professional football player previously. " +
          "E.Z. states, “The products have been phenomenal for my family. I started with Isagenix 2 years ago, and have released " +
          "over 55 pounds of visceral body fat and couldn’t imagine going a day without my two IsaPro shakes and Cleanse for Life " +
          "at night.” The financial opportunity with Isagenix has also been great for their family. They have been able to " +
          "relieve several financial burdens since starting and are actively working towards creating permanent financial freedom " +
          "in their lives!"
      },
      {
        name: "Jeanette Baack-Lowry",
        imageUrl: "assets/imgs/team/jeanette-lowry.jpg",
        title: "NWM Professional, Entrepreneur",
        details:
          "Jeanette and her husband, Gary, live in Vancouver, Washington. As an entrepreneur, Jeanette had started dabbling in " +
          "the Network Marketing industry and, not understanding the financial model, became intentional regarding sharing the " +
          "products she loved, and, in turn, became a very successful expert within the industry. Jeanette still had a need to do " +
          "something where she could get the sense of accomplishment of using her skills and filling that spot deep in her heart " +
          "of making a difference in a large tribe of people. Jeanette has always been interested in health and fitness and when " +
          "industry expert Susan Miller shared the Isagenix opportunity with her, Jeanette was open and embraced the reconnection " +
          "with Susan and her tribe. “Thank you, Susan Miller, for calling me for years until I finally looked! I’ve found my " +
          "passion, MY LAST STOP in Network Marketing and today I am INSPIRED AGAIN!”"
      },
      {
        name: "Susy and Robbie Wicks",
        imageUrl: "assets/imgs/team/susy-and-robbie-wicks.jpg",
        title: "Solicitor; Entrepreneur (Australia)",
        details:
          "Susy and her husband, Robbie, live in beautiful, down under Sydney, Australia. Together they are a couple that have " +
          "had the time of their lives enjoying earlier successes in Network Marketing in the 90’s (without today’s technology)! " +
          "Eventually, they decided to leave the industry to pursue other business interests. In 2012, Susy and Robbie travelled " +
          "for 10 months throughout Europe and America. They then decided to come out of retirement in April 2013, when they were " +
          "introduced to the business of Isagenix. They specifically wanted to capture the huge financial growth they saw " +
          "happening with the company. Susy and Robbie were witnessing the rapid growth towards critical mass and that excited " +
          "them. Together they are building teams worldwide, capturing market share, enjoying amazing good health, and securing " +
          "their children’s long-term financial security."
      },
      {
        name: "Jenn Andrews",
        imageUrl: "assets/imgs/team/jenn-andrews.jpg",
        title: "Former Insurance Regoinal Manager",
        details:
          "Jenn and her husband, Miles, live in Charlotte, NC, with their two beautiful children. Jenn is a former Group " +
          "Insurance Manager for the North Carolina and South Carolina territories. Working in employee benefits, health has " +
          "always been an important topic in her household. In her own words, “What first started a means of post-baby weight " +
          "loss, turned into a full health transformation after some major health challenges. Having my body in an alkaline state " +
          "better prepares me to fight disease. As for the opportunity, it has allowed me to walk away from corporate America and " +
          "put my growth in my own hands. I will never look back!"
      },
      {
        name: "Andrea Labouchere",
        imageUrl: "assets/imgs/team/andrea-labouchere.jpg",
        title: "Former English Teacher",
        details:
          "Andrea and her husband, Mark, are living in Smyrna, Georgia, with their two beautiful children and number three on the " +
          "way. Andrea is a former high school English teacher of ten years. This opportunity allows her to now be home with her " +
          "family; Isagenix allows her to focus on being available to them while building a life of financial freedom. More " +
          "importantly, this opportunity has given their family the ability to dream beyond their wildest dreams and to show their " +
          "children that investing in yourself and your health is worth every sacrifice that it may bring."
      },
      {
        name: "Adrienne Donovan",
        imageUrl: "assets/imgs/team/adrienne-donovan.jpg",
        title: "Former Pharmaceutical Sales Rep",
        details:
          "Adrienne and her husband, Mike, with their children, reside in Wake Forest, NC. Adrienne, after having her children, " +
          "saw the need to transition from the professional field to becoming a stay-at-home mom. Her three children, one of whom, " +
          "her son Bennett, having been diagnosed with Down's Syndrome, benefited greatly from Adrienne being home full-time. " +
          "Isagenix was an avenue to provide health and a financial solution to her family, especially for the expensive therapies " +
          "Bennett needed. This nutrition has greatly impacted her family, first and foremost, as a tool to provide the nutrition " +
          "they need daily, but also provided a significant income that surpassed her prior salary in less than a year.",
        recognitionName: "2018 Heart of Isagenix - Check out the IsaFyi Story"
      },
      {
        name: "Melissa Henault",
        imageUrl: "assets/imgs/team/melissa-henault.jpg",
        title: "Medical Director for Team of Medical Scientists",
        details:
          "Melissa and her husband, Jake, along with their two beautiful children, and patiently awaiting baby number three, reside " +
          "in lovely Charlotte, NC. Melissa is currently working full-time as a Medical Director in the Charlotte area. This position " +
          "requires consistent travel and causes elevated stress levels. Melissa is an avid athlete and fuels her body through a " +
          "clean Paleo lifestyle, but remained exhausted on the inside daily. She began her search for something to help simplify " +
          "the extensive food prep process while continuing to achieve the alkaline lifestyle, which was her goal. Melissa was " +
          "approached several times by a dear friend, for a year, regarding sharing the Isagenix nutrition, which supports an " +
          "alkaline lifestyle. Only after several 'no’s', Melissa was finally open to saying 'yes'. Shortly after starting, Melissa " +
          "discovered the simplicity of Isagenix. Not only did Isagenix meet all her needs physically, but it also allowed her to " +
          "manage her time. Life became fun again and her energy was restored. At that point, Melissa knew she needed to share this " +
          "simplicity with everyone. This opportunity has blessed Melissa and her family with a six-figure income while still " +
          "allowing her to enjoy her full-time job."
      },
      {
        name: "Nina McCallie",
        imageUrl: "assets/imgs/team/nina-mccallie.jpg",
        title: "20-year Veteran Network Marketer",
        details:
          "Nina McCallie, Crystal Executive Three-Star Golden Circle, has been in the Network Marketing industry for the last 20 " +
          "years, with the last 10 being in health and wellness. She is deeply passionate about the industry and even more " +
          "passionate about bringing Mama’s and Daddy’s home to raise their families. With a Masters degree in Marriage and Family " +
          "Therapy, Nina knows the value and power of the presence of parents in their children's daily lives. Nina has never known " +
          "a day without the freedom to be present at every doctor's appointment and sporting event for her three children. One of " +
          "Nina’s greatest joys is helping women achieve their goals and find their life’s calling by living in their “passion " +
          "zone”. She understands fear and loves to empower women to dig deep to unlock their God-given potential and gifts as well " +
          "as stretch themselves to become all they were designed to be. For Nina, her success is measured in time with her family, " +
          "transformation of her teams' bodies and minds, and freedom from financial burdens. Isagenix has been the perfect vehicle " +
          "to allow her and those she partners with to live their best lives!"
      },
      {
        name: "Kathleen Miller",
        imageUrl: "assets/imgs/team/kathleen-miller.jpg",
        title: "Stay-at-home Mom and Medical Interpreter",
        details:
          "Shawn and Kathleen Miller live in Goshen, Indiana, along with their eight children. Shawn and Kathleen describe Isagenix " +
          "as a gift that was given to them when they least expected it. It was Kathleen’s search for nutrition for their newly " +
          "adopted son that would eventually lead them into the opportunity that would change them forever. Kathleen’s ability to " +
          "connect with others, along with Shawn’s experience in the workforce, has allowed them to use their personalities and " +
          "experiences to build a team of like-minded leaders. After years of corporate work, Shawn especially enjoys being able to " +
          "build into the success of others, living out the greatest form of leadership, duplication. Their desire is to inspire " +
          "others to think and walk differently, to embrace the truth that we have all been called to live a life of IMPACT."
      },
      {
        name: "McLane Layton",
        imageUrl: "assets/imgs/team/mclane-layton.jpg",
        title:
          "Former Legislative Counsel for Energy and Environment in the U.S. Senate",
        details:
          "McLane and her husband, Rusty, live in Alexandria, VA, ten miles from the U.S. Capitol. McLane is an attorney who has " +
          "practiced in the areas of energy and environment law for over 20 years. When McLane and Rusty adopted siblings from " +
          "Eastern Europe, McLane turned her passion and talents towards advocating for equal rights of adoptees and their families " +
          "through a non-profit she founded called Equality for Adopted Children (EACH). After being introduced to Isagenix through " +
          "two dear friends and fellow adoption advocates, Deanna and Carolyn, McLane experienced a personal health transformation " +
          "and now feels passionately about sharing the health and financial opportunity of Isagenix with others in need of physical " +
          "and financial freedom."
      },
      {
        name: "Linda Hannum",
        imageUrl: "assets/imgs/team/linda-hannum.jpg",
        title: "Business Owner",
        details:
          "Linda Hannum – Salon Owner<p>Kristi Nelson – Executive Director of a Non-Profit</p><p>Linda Hannum, along with her " +
          "spouse Kristi Nelson, live in Hadley, MA. Linda is the owner of a Salon and Spa in Northampton, Massachusetts and " +
          "had been working tirelessly since opening in 2003. Although the salon is successful, Linda was unable to draw much, " +
          "if any, salary from the business. She had invested everything she had and thus was struggling under a mountain of " +
          "debt. Linda knew that she needed to find a different way to get out from under the debt and to begin to provide a " +
          "steady stream of income for her family, and this new work would need to be done in the pockets of her time. From a " +
          "health standpoint, Linda was diagnosed with a disease in 2001 that affects the myelin sheath that covers the nervous " +
          "system in her brain. She knew she needed better nutrition for her body, and vitamins and minerals too, but just didn’t " +
          "know who to turn to for that information. After being on the products for a few months, she really began to feel " +
          "increased energy, had much better focus, and knew that she had found the answer to her financial struggles! Linda has " +
          "found that the primary reason she loves Isagenix is that she has been able to change people’s lives by sharing with " +
          "them the gift of better health and the invaluable gift of rekindling life-long dreams that the people she works with " +
          "had long ago forgotten. Those people can now see the possibility of turning those dreams into reality… and this is " +
          "what Isagenix is all about!"
      },
      {
        name: "Delialah and Todd Lotich",
        imageUrl: "assets/imgs/team/delialah-and-todd-lotich.jpg",
        title: "Holistic Health and Nutrition Writer/Author; Corporate Sales",
        details:
          "Delialah and Todd Lotich reside with their beautiful children in Charlotte, NC. As a busy mom and freelancer, Delialah " +
          "had a difficult time releasing the last few pounds of her pregnancy weight. Given Delialah’s health background, she would " +
          "not agree to try any nutritional programs unless they met her strong expectations. When introduced to Isagenix, after " +
          "saying 'no' multiple times, she finally agreed to give it a try after acknowledging the superior ingredients in the food. " +
          "After seeing rapid results in a matter of days, she quickly began sharing with moms and families. Because of the generous " +
          "compensation plan, Delialah was able to free Todd from his corporate position after one year with Isagenix. Together, " +
          "Delialah and Todd were able to take their passion for helping others and grew a multiple six-figure income in just two " +
          "years."
      },
      {
        name: "Staci Friedman Shapiro",
        imageUrl: "assets/imgs/team/staci-shapiro.jpg",
        title: "Former Montessori Primary Teacher",
        details:
          "Staci Friedman lives in Chicago, Illinois with her husband and son. Staci is a former Montessori Primary Teacher; she " +
          "spent 10 years in the classroom. Staci was introduced to Isagenix and had a dramatic physical transformation that " +
          "completely gave her a new perspective on life. Her love for sharing the gift of physical wellness and financial " +
          "opportunity has become her new life of “caring” for others, including moms (like herself). Thanks to Isagenix, Staci " +
          "has since retired from teaching - a choice she could make for herself and her family. She now realizes the importance " +
          "of fueling properly and fully understands the impact of being able to have and make choices not based on limited " +
          "resources. Smiling often… dreaming big… laughing with her entire body… Staci aspires to help others live on their " +
          "own terms, not locked in by somebody else’s schedule or parameters."
      },
      {
        name: "Barb Kolby",
        imageUrl: "assets/imgs/team/barb-kolby.jpg",
        title: "Grandmother of 10",
        details:
          "Formerly from Ohio, Barb Kolby and her husband, Kurt, now reside in Waxhaw, NC. Barb is a beautiful and dedicated mom " +
          "to six children and currently has 10 grandchildren. Family is the key reason why Network Marketing appealed to this " +
          "already busy mom. The ability to have a passion, impact others, support a profession that embraced family first, and " +
          "live a lifestyle with a professional income, demonstrated, hands-down, that Isagenix was the opportunity she was " +
          "looking for. Barb came to Isagenix with very successful industry experience from other Network Marketing companies, " +
          "but something was missing from her prior company. When people ask Barb why she left her former company to join " +
          "Isagenix, she answers “Just the fact that someone like me did that should tell you everything you need to know. My " +
          "only regret is not joining Isagenix sooner!”"
      },
      {
        name: "Courtney Aldridge",
        imageUrl: "assets/imgs/team/courtney-aldridge.jpg",
        title: "Stay-at-home Mom",
        details:
          "Courtney and Chad Aldridge live in beautiful Greensboro, NC, and have three children. As a stay-at-home mom, Courtney " +
          "was desperate for energy and looking for an overall jumpstart to better health for herself and her family. During this " +
          "time, she was introduced to Isagenix. As Courtney realized an incredible newfound energy and mental clarity, Chad also " +
          "experienced weight loss results and less stress in his demanding career, in a way that that he never had before. They " +
          "realized they had found something they were very passionate about sharing, and it aligned perfectly with their nature " +
          "and desire to care for and help others. Courtney’s and Chad’s combined heart and passion is to help others redeem the " +
          "best version of themselves both physically and financially, with a specific focus and mission to provide other moms " +
          "the same gift of supplementing income from home. Together they have built a team of people helping people and are " +
          "blessed to have created a six-figure income with Isagenix in less than a year."
      },
      {
        name: "Dana and John Gezik",
        imageUrl: "assets/imgs/team/dana-and-john-gezik.jpg",
        title: "Home-school Mom; Small Business Owner",
        details:
          "Dana and John Gezik live in Shorewood, IL, have been married for 22 years, and have two teenage boys. John has owned " +
          "his own business for the past 15 years and Dana is a stay-home “home school” mom. They were introduced to the Network " +
          "Marketing industry early in their marriage, and they immediately caught the vision of having control of their time and " +
          "financial freedom. However, they experienced only limited success with other companies. This all changed when they " +
          "were introduced to Isagenix. Dana quickly saw weight loss results; the products have helped changed their lives " +
          "physically and the compensation plan changed their lives financially. Dana and John are now on a mission to help those " +
          "who are looking for the same freedom. This couple finally found a company that “got it right” and would allow them to " +
          "achieve the freedom they’ve always dreamed possible."
      },
      {
        name: "Illy Rosenstein",
        imageUrl: "assets/imgs/team/illy-rosenstein.jpg",
        title: "Aquatics Instructor",
        details:
          "Illy Rosenstein lives in beautiful Brisbane, Queensland, Australia. For years, Illy worked within the aquatics " +
          "industry teaching and coaching while still being able to travel and snowboard her way around the world. She worked " +
          "her way to the top of her “career” within the health and fitness industry, culminating as the regional manager for " +
          "the corporate division of one of the leading management groups of health and leisure facilities within Australia. " +
          "Deep down, though, she knew that this “corporate” lifestyle was not for her. After four years at the top, she had lost " +
          "her passion for the industry and was burned out, stressed out, and her health was suffering. She knew it was time to " +
          "close one door to open another, so she decided to go back to her passion of teaching, coaching, and helping others. " +
          "This is when she was introduced to Isagenix and aligned herself with a company dedicated to changing lives. Her " +
          "personal philosophy: WORK SMART, KICK GOALS, FULFILL DREAMS!"
      },
      {
        name: "Elaine Moody",
        imageUrl: "assets/imgs/team/elaine-moody.jpg",
        title: "Former Technology Business Manager",
        details:
          "Elaine Moody and her husband, Brad, live in Charlotte, NC with their two beautiful daughters. As a former “technology " +
          "geek” for Corporate America, Elaine spent many stressful hours doing what she loved but fighting health battles along " +
          "the way. She's forever grateful to a friend for introducing her to this nutritional solution, which has given her a " +
          "chance to live with no symptoms. Elaine saw huge benefits and began to share her knowledge with those also facing " +
          "health challenges. This, in turn, opened a financial opportunity for her family and the ability to free those who " +
          "struggle in Corporate America, as well as help create a #weekendlifestyle for all."
      },
      {
        name: "Tina and Mick Hyman",
        imageUrl: "assets/imgs/team/tina-and-mick-hyman.jpg",
        title: "Entrepreneurs",
        details:
          "Tina and Mick Hyman live in beautiful Sydney, Australia. Both being driven by their entrepreneurial spirits, they were " +
          "busy running their own businesses alongside raising their large family of five boys. As crazy as life can be with " +
          "large families, people quickly lose focus on their health. It was at this time, Tina and Mick were introduced to " +
          "Isagenix by their close friends, Robbie and Susy Wicks. Tina and Mick quickly saw results as Tina shed almost 50 " +
          "pounds and Mick 40 pounds with profound improvement in general health and well-being. With renewed energy and " +
          "enthusiasm for life, people started to notice and were attracted to the opportunity Isagenix offered both from a " +
          "product and business perspective, which made sharing easy with friends and family. Their business started to grow " +
          "organically and Tina and Mick immediately recognized that Isagenix offered an exciting and viable option to transition " +
          "from their current businesses, working part-time to create some leveraged income - something that was lacking in their " +
          "lives."
      },
      {
        name: "John and Tracie Loux",
        imageUrl: "assets/imgs/team/tracie-and-john-loux.jpg",
        title: "Adoption Consultant; Educator / Musician",
        details:
          "Tracie and her husband, John, live in Kansas City, MO. They have seven children and one beautiful granddaughter. Tracie " +
          "has a degree in Art Education, but has spent the last ten years working as an adoption consultant. John is a full-time " +
          "musician and a very busy dad! Tracie’s impact is greatly felt in families throughout the United States in her mission " +
          "to help children find forever homes. After seven years immersed in the adoption community, and adopting four of their " +
          "own children, she describes herself as a “Dead Woman Walking,” exhausted with stress levels elevated daily. John, too, " +
          "was experiencing his own burnout at the same time. After struggling with their health and having years of stress take " +
          "its toll on their bodies, John and Tracie have experienced incredible transformations of their bodies, minds, and " +
          "spirits through the power of nutritional cleansing, maintaining healthy fitness routines, and through developing a " +
          "life giving spiritual practice. Isagenix has provided a nutritional solution to help under-nourished children and their " +
          "families get healthy, and also provides a financial opportunity to change their futures. John and Tracie’s passion is " +
          "to help others come alive and strong from the inside out, physically and financially."
      },
      {
        name: "Erin Brauer",
        imageUrl: "assets/imgs/team/erin-brauer.jpg",
        title: "Former Elementary School Teacher",
        details:
          "Erin and her husband, Kevin, live in beautiful Wake Forest, NC. Erin was a former elementary school teacher and even " +
          "though she loved making a daily impact in these children’s lives, she knew she wanted to be at home with her own children. " +
          "Erin was searching for better nutrition for herself and her family so she could be proactive with a history of health " +
          "challenges within the family. When a close friend of Erin’s heard of her desire, she immediately shared the nutrition " +
          "that had already changed their family. Erin quickly felt the benefits of this nutrition and has fed this to her entire " +
          "family for the past three years. When friends quickly saw her results, she began sharing the nutrition and is currently " +
          "building a strong team and changing her family’s financial future by helping others. Within three months, Erin was able " +
          "to surpass her monthly teaching income and has since built a six-figure income with Isagenix."
      },
      {
        name: "Dr. Michael Guthrie",
        imageUrl: "assets/imgs/team/michael-guthrie.jpg",
        title: "Oral Surgeon",
        details:
          "Michael Guthrie, D.D.S. lives in beautiful South Barrington, IL. He has practiced for 21 years in his private practice as " +
          "an Oral and Maxillofacial Surgeon. Michael was introduced to Isagenix at a time in his life when things were not going as " +
          "planned. He suffered a shoulder injury that required him to have to take two years away from his surgical profession. He " +
          "gained weight and needed to lose it and gain better control of his health. He lost 35 pounds, felt great, had better " +
          "energy, and realized that this nutrition was excellent. He researched the company, its corporate leadership, and the " +
          "compensation plan, and was equally impressed! He knew that residual income was a way that he could allow himself to never " +
          "have to worry again about losing income from his practice – as he experienced when he was injured. He also loved the idea " +
          "of building networks of people, meeting new people, and locking arms with them as they grow and build networks together. " +
          "Isagenix has allowed Michael to experience a life-changing transformation that occurred as a result of feeding his body " +
          "complete, dense, and powerful nutrition."
      },
      {
        name: "Nancy Baxter",
        imageUrl: "assets/imgs/team/nancy-baxter.jpg",
        title: "Stay-at-home Mom and Fitness Coach",
        details:
          "Nancy and her husband, Mike, live in Malvern, PA, along with their two children. Shortly after Nancy became pregnant with " +
          "their third child, they had found out that their daughter, Lainey, would be born with Down's Syndrome. Knowing that their " +
          "growing family would need extra help, the Baxter’s decided to relocate to the Philadelphia area to be closer to Nancy’s " +
          "family. This decision also meant a job change and pay cut for Mike. Nancy desperately wanted to help her husband " +
          "financially as well as give to Lainey as much extra support as she needed. The stress had taken such a physical toll on " +
          "Nancy that her health and well-being were in jeopardy. She was introduced to Isagenix by her friend Adrienne Donovan, who " +
          "also has a Down's Syndrome son. Shortly after starting the system, Nancy lost countless pounds and inches and regained " +
          "the strength and energy that had been lacking for such a long time. She began sharing her experience with friends and " +
          "family members, which led to an incredible business opportunity - one she never expected. This opportunity has opened so " +
          "many new doors for Nancy. Not only is she able to contribute to the financial needs of her family, but she has also " +
          "followed her dreams to help others with their health and fitness goals. Nancy is a CrossFit Level 1 Coach, Les Mills Grit " +
          "Instructor, and she's training for her first Half Ironman. This has afforded Nancy time and financial freedom and a new " +
          "lease on life!"
      },
      {
        name: "Link Kiser",
        imageUrl: "assets/imgs/team/link-kiser.jpg",
        title: "Fashion Model",
        details:
          "Link Kiser finds his home in beautiful Winston Salem, NC. He has had a very successful career within the modeling industry " +
          "for the past 30 years. He has always been focused on proper nutrition to maintain the physical physique needed for success " +
          "within the industry. Link is always maintaining a business mind and always considers himself to be open to business " +
          "opportunities. When he was introduced to Isagenix through a social media platform, it really caught his eye. He was blown " +
          "away when he saw how generous the compensation plan was, so he didn't waste any time making this the only thing he wants " +
          "do for the rest of his life. Isagenix is both impacting him physically and financially."
      },
      {
        name: "Ginna Larson",
        imageUrl: "assets/imgs/team/ginna-larson.jpg",
        title: "National Sales Manager",
        details:
          "Ginna and her husband, Nels, live in beautiful Lyons, Colorado, along with their two beautiful daughters. Ginna has a " +
          "Bachelor's degree in Journalism and a Master’s degree in Marketing.  She has worked in sales and marketing management for " +
          "over 20 years and gained valuable experience. After a powerful Isagenix product experience introduced to her by a close " +
          "friend, Ginna saw a post from her friend Carol Elizabeth discussing the power of residual income. In sales, Ginna always " +
          "earned a very good income within her position. Ginna knew the more successful she was, the more changes her company would " +
          "make to the compensation plan, thus, making it harder and harder to earn money. Seeing Carol’s post is when the lightbulb " +
          "went off, and she decided to learn how to share the gift of Isagenix with others. Now, not only is she building a " +
          "successful business with Isagenix, but she is also leaving a legacy for her two young daughters."
      },
      {
        name: "Tracie Taylor",
        imageUrl: "assets/imgs/team/tracie-taylor.jpg",
        title: "Elite Trainer / Personal Development",
        details:
          "Tracie Taylor lives in Charlotte, NC. She is a single mother who spent 12 years prior to Isagenix as an Elite Trainer " +
          "for Robert Kiyosaki’s Rich Dad Education Company. She’s a Financial Literacy Coach and Wealth and Wellness Advocate. " +
          "Tracie educates and empowers groups and individuals to gain mastery of self to facilitate access to time, money, and " +
          "freedom. She truly believes that abundance begins with a healthy mind, body, and spirit. Her mission is  to create " +
          "environments where all individuals feel inspired, valued, and honored for their contribution. She’s on a global mission " +
          "to free people both physically and financially, using Isagenix as her partner to help accomplish this."
      },
      {
        name: "Erin Taylor",
        imageUrl: "assets/imgs/team/erin-taylor.jpg",
        title: "Home-school Mom",
        details:
          "Erin and her husband, Chris, live in Portage, Indiana, with their four beautiful children. Erin is an at-home mom that " +
          "loves being there for her family full-time. As busy as her life is, she was looking for a weight loss and energy solution " +
          "but was not interested in settling for poor ingredients. She was pleasantly surprised when her adoptive momma friend " +
          "shared Isagenix with her, and it met her rigorous standards for quality. When Chris and Erin decided to go for it, they " +
          "knew within a week they had made a great choice. They were so thrilled by their results and how amazing they felt, they " +
          "couldn’t help but share and encourage their family and friends to give Isagenix a try. What started as a fun hobby for " +
          "Erin that first year has blossomed into an opportunity for her, in the pockets of her time, and around her husband and " +
          "children (whom she continues to educate at home), to contribute significantly to her family’s financial picture. Erin " +
          "thanks God every day that she and her husband said 'yes'."
      },
      {
        name: "Aaron Ciarla",
        imageUrl: "assets/imgs/team/aaron-ciarla.jpg",
        title: "Professional Swim Coach",
        details:
          "Aaron Ciarla currently lives in sunny Miami, Florida. During the last 20 years as a Division I collegiate swimmer, Aaron " +
          "advanced into a professional swim career. Aaron was always in search for the BEST health and wellness products to aid in " +
          "his training. Unfortunately, it wasn’t until he took a coaching position at the college level did he find Isagenix! After " +
          "a long stint in the swimming world and a short career with a medical start-up company, he was able to “retire” from the " +
          "daily grind and focus solely on his Isagenix business. He is forever grateful for Isagenix, not only for the amazing health " +
          "it has afforded him, but also the financial freedom and opportunity to form excellent relationships with all the awesome " +
          "people involved along the way - people like from Jim and Kathy Coover, to his fellow associates that make it a goal to help " +
          'people find Isagenix. "I am with Isagenix for life!" says Aaron. He was introduced to Isagenix by his sister Jessica ' +
          "Johnston, not knowing how his life would change with this amazing company forever."
      },
      {
        name: "Tavia Rogerson",
        imageUrl: "assets/imgs/team/tavia-rogerson.jpg",
        title: "Brand Director, Sporting Goods",
        details:
          "Tavia and her husband, Jay, live in Hamilton, Ontario, with their two beautiful daughters. Tavia had found a career in the " +
          "corporate world as a Brand Director. This was a position she enjoyed but knew the stressful hours affected her and her " +
          "health. She had some unwanted weight she wanted to release, and her friend, a Holistic Nutritionist, called her and told " +
          "her she needed to look at these products. Tavia began her Isagenix journey in 2014. She went on to lose 25 pounds and, " +
          "naturally, people around her needed to know what she was doing. By sharing her transformation with others and helping " +
          "people begin their own health journeys, Tavia realized that there was a significant financial opportunity with Isagenix by " +
          "doing something that fueled her with passion and drive. Now her goal is to educate people on the importance of nutrition, " +
          "finding their inner confidence, setting goals, and crushing them."
      },
      {
        name: "Jackie Black",
        imageUrl: "assets/imgs/team/jackie-black.jpg",
        title: "Former Visual Arts Teacher, Head of Department",
        details:
          "As a former head of a high school visual arts department, Jackie has always been passionate about everything she does – " +
          "from working with students to ensuring the best health for herself and my family. She believed that eating organic whole " +
          "foods and maintaining daily exercise would give her the health results she wanted. Since being introduced to Isagenix in " +
          "2013, she has more energy, sleeps better, and feels amazing. Now, Jackie will not go a day without putting these products " +
          "into her body. She is “passionate to help others live the lives they truly deserve.”"
      },
      {
        name: "Jennifer Warnock",
        imageUrl: "assets/imgs/team/jennifer-warnock.jpg",
        title: "Former Gym Owner",
        details:
          "Jen Warnock lives in beautiful Murrieta, California, and was the owner of a personal training facility in Southern " +
          "California. Jennifer was frustrated daily by the limitations of gym ownership and the long hours away from her family. " +
          "She knew there was a better time-freedom solution to allow her to be home with her family and still financially be okay. " +
          "She began building her Isagenix business in 2013. Jen quickly found that she could help far more people outside the gym " +
          "than inside her four walls and saw Isagenix as the solution she had been looking for. Isagenix allowed her to close her " +
          "physical location in 2016 and take her business virtual, creating more time freedom and the ability to help a much larger " +
          "group of people across the globe, not just across the street."
      },
      {
        name: "Mandy Andre",
        imageUrl: "assets/imgs/team/mandy-andre.jpg",
        title: "Fitness Coach",
        details:
          "Mandy and her husband, Charlie, live in Navarre, Florida, along with their two children. Mandy has always valued nutrition " +
          "and the importance of exercise. She has a strong passion for helping others achieve their goals, which is where she can " +
          "really impact people the most. Mandy began coaching as a personal trainer and fitness instructor. She loved what she was " +
          "doing but quickly saw that she was trading too much time for the income she was making. Her hours quickly proved she was " +
          "right, working crazy hours, pulling her away from her family. She was introduced to Isagenix by a dear friend, who saw what " +
          "this opportunity was capable of offering people. When Mandy quickly caught the vision of the bigger picture, she jumped in " +
          "with both feet, knowing she could impact more people. With Isagenix, Mandy is now able to train whom she wants and when she " +
          "wants. Isagenix has truly shown her how to do what she loves and still have the time freedom she was searching for."
      },
      {
        name: "Carene and Danny Pisano",
        imageUrl: "assets/imgs/team/carene-and-danny-pisano.jpg",
        title: "Stay-at-home Mom; Entertainer / Singer",
        details:
          "Carene and her husband, Danny, live in Smithtown, New York, with their three beautiful children. Carene was a stay-at-home " +
          "mom and worked a few times a month at Michael's Craft store teaching crochet classes. She was also tired all the time " +
          "and not happy with what she saw when she looked in the mirror. Danny was working his nine-to-five job, and was also the " +
          "lead singer in his band, Nitework. Carene and Danny were struggling to make ends meet, and they both knew they needed a " +
          "change. A very dear friend introduced them to Isagenix. The friend was studying Holistic Nutrition, and had been helping " +
          "Carene make some healthy changes for Danny and their family. They went from barely getting out of the bed in the mornings " +
          "and falling asleep on the couch at night, to getting up early on the weekends and being more active with the kids. They " +
          "also have “couples therapy” five or six times a week at the gym! Carene had never gone to a gym or lifted a weight until " +
          "she discovered Isagenix. Danny is still singing with his band, but now he has the energy to dance and sing, and Carene " +
          "no longer has to teach crochet classes. Being healthy and having more energy has brought the Pisano's much closer as a " +
          "couple, and they're no longer struggling the way they did in the past."
      },
      {
        name: "Helen Costa Giles",
        imageUrl: "assets/imgs/team/helen-costa-giles.jpg",
        title:
          "Supervisor for Yazaki North America, 2016 IsaBody Finalish, 2017 IsaBody Champion",
        details:
          "Helen and her husband, Gary, live in beautiful historic San Antonio, Texas, along with their children. Helen is a mother, " +
          "coach, and career woman, and her constant stress levels and busy schedule were affecting her physically and mentally. " +
          "She began to lose her spark and was losing balance between family and work, something all of us face at some time along " +
          "the way. Without her past energy, Helen started to neglect her own health and began gaining unwanted weight. Sadly, she " +
          "accepted this as the way it had to be. After a visit to her doctor for her annual checkup, Helen realized how badly her " +
          "health had deteriorated and knew she needed to make a change. Helen had tried every pill, fad, and diet out there, but " +
          "couldn’t find the results she was looking for until she noticed the changes in her best friend, who'd been using Isagenix " +
          "products. Helen knew she had to get on board. She started with Isagenix and the IsaBody Challenge® and immediately began " +
          "to feel a difference. She felt her energy return, and she started to lose the extra weight. Helen kept her momentum going " +
          "with her husband, who also released an outstanding 60 pounds with Isagenix. Helen hopes to retire her husband and then " +
          "herself so that she can pursue her Isagenix business and other passions full time. She wants to help others while having " +
          "the flexibility to spend quality time with her family, both at home and while traveling.",
        recognitionName:
          "2017 IsaBody Grand Prize Winner - Check out the IsaFyi Story"
      }
    ];
  }

  initializeStart1000() {
    this.start1000 = [
      {
        name: "Renee Schreibman",
        imageUrl: "assets/imgs/team/renee-schreibman.jpg",
        title: "Former Corporate Sales Trainer, Entrepreneur",
        details:
          "Renee and her husband, Philip, live in beautiful Charlotte, NC, with their three children. Renee has been " +
          "assisting clients for years with attracting better health through nutritional knowledge and self-discipline. Her " +
          "personal experience overcoming inflammatory autoimmune symptoms, along with her success in enabling others to adopt " +
          "a healthy lifestyle through Isagenix, fuels her passion for nutritional health and wellness. This passion led to an " +
          "opportunity to help hundreds, which evolved into thousands, over the years. She has become the ultimate 'mompreneur', " +
          "building a wildly successful home-based online business in the pockets of time outside of her full-time corporate " +
          "job and is now a full-time mom! Since her journey began, she has tripled her income and now serves not only as a " +
          "health mentor, but also as a success mentor to thousands as an expert in building businesses online!"
      },
      {
        name: "Elizabeth LeConey",
        imageUrl: "assets/imgs/team/liz-leconey.jpg",
        title: "Former Corporate Employee",
        details:
          "Elizabeth and her husband, Josh, reside in Wake Forest, NC, with their two sons. Prior to becoming a Network " +
          "Marketing professional, Elizabeth worked a corporate career in business development for 13 years. She was " +
          "introduced to this nutrition with no desire to explore Network Marketing for the first eight months. After " +
          "evaluating the compensation plan and timing of the company, she launched her business in early 2014 and quickly " +
          "replaced and exceeded her corporate salary by the end of that year. Elizabeth has a passion to help people think " +
          "outside the box, explore their fullest potential, and create a life of time and financial freedom. She has helped " +
          "thousands of people globally, as well as helped develop many multiple six-figure earners under the age of 35."
      },
      {
        name: "Meredith and Brian Wright",
        imageUrl: "assets/imgs/team/meredith-and-brian-wright.jpg",
        title: "Former Pre-school Teacher; Executive Management",
        details:
          "Brian and Meredith Wright are living in beautiful Greensboro, NC, with their three children. Meredith, a " +
          "former pre-school teacher, was facing a health battle with digestive issues. Daily, she battled exhaustion, food " +
          "sensitivities, inflammation, and more, which made her struggle during her work day. Meredith knew that changes " +
          "needed to be made and nutrition was at the top of her list. At this point in Meredith’s journey for a solution, " +
          "she reconnected with college suitemate, Elizabeth LeConey, who shared the nutrition solution that impacted her " +
          "family. When her husband, Brian, saw his wife’s results, he joined her 30 days later. Brian immediately saw and " +
          "felt an increase in energy and was sold on the quality of the products. Brian is known as a gym rat and was " +
          "impressed by the effects of the products in his workout performance. He was successful within the Corporate sector " +
          "but felt unfulfilled due to the day-to-day struggle of the high-stress demands of his position. He has now joined " +
          "his wife and their team of “freedom fighters,” changing the lives of many through Isagenix, and has replaced his " +
          "corporate income with an Isagenix six-figure income to allow his resignation as of July 2015."
      },
      {
        name: "Amanda Edwards Hamm",
        imageUrl: "assets/imgs/team/amanda-edwards-hamm.jpg",
        title: "Former Corporate Recruiting Consultant",
        details:
          "Amanda and her husband, PJ, live in beautiful Atlanta, GA. Amanda was a former corporate recruiting " +
          "consultant, prior to being introduced to Isagenix at a time when she needed it most. Having just had her little " +
          "girl, she was gearing up to return to her well-paying corporate role, after maternity leave, with lots of anxiety " +
          "and a heavy heart. Amanda is forever grateful to a dear friend and former classmate, Renee Schreibman, for sharing " +
          "what had changed her health and financial situation so drastically. Life has been amazing ever since for Amanda; " +
          "she jumped in with both feet first and has never turned back. Having quit her job two months later due to seeing " +
          "the vision of this amazing compensation plan, she now has the best of both worlds and is building an empire with " +
          "her almost two-year-old daughter, her amazing mentors, and the best team a girl could ask for."
      },
      {
        name: "Chelsea Lauren Miller",
        imageUrl: "assets/imgs/team/chelsea-lauren-miller.jpg",
        title: "2015 College Grad, Top 3 Income Earner < 25",
        details:
          "Chelsea Miller lives in Cambridge, MA, and is a graduate from Babson College (the #1 school in the U.S. for " +
          "entrepreneurship). Chelsea graduated magnum cum laude with a double-concentration in economics and business " +
          "analytics. After spending the summer in an internship at a fortune 500 company in NYC, she realized that Corporate " +
          "America was not for her, since building someone else’s dream did not fit into her career plans. Since graduating, " +
          "she followed in her mother’s footsteps and has built a dynamic team within Isagenix, being honored to be in the top " +
          "3 income earners under the age of 25 in the company (two years running), and a START 1000 member. She is on a " +
          "mission to share and educate millennials that they can create a life by their own design and have a blast while " +
          "doing so."
      }
    ];
  }

  initializeTeamIsagenix() {
    this.teamIsagenix = [
      {
        name: "Carol Elizabeth",
        imageUrl: "assets/imgs/team/carol-elizabeth.jpg",
        title: "Fitness Competitor, Entrepreneur",
        details:
          "Carol Elizabeth and her husband, Michael, reside in beautiful Toronto, Canada, with their three children. " +
          "As a busy mom of three, Carol was already undergoing a weight loss transformation where she learned 'fit' doesn’t " +
          "equal 'healthy'. In March of 2013, Carol began her Isagenix journey from a product and nutritional benefit " +
          "standpoint only. Carol is a nationally ranked figure athlete in Canada, as well as 2013 and 2016 Ms. Figure " +
          "Universe. Along this health journey, Carol rediscovered herself and is passionate about helping other women find " +
          "their ME. Carol takes her talents next level as a personal trainer, fitness professional, and motivator of all " +
          "people. Isagenix has allowed her to help many find their “sparkle” and has financially impacted her family along " +
          "her way to a becoming a multiple six-figure income-earner. The goal was to feed her body the proper nutrition to " +
          "get healthy, but what she found was the bonds she has formed with those on this team is unlike anything she has " +
          "ever been a part of.”",
        recognitionName: "2017 Heart of Isagenix - Check out the IsaFyi Story"
      },
      {
        name: "Joe Andruzzi",
        imageUrl: "assets/imgs/team/joe-andruzzi.jpg",
        title: "3x NFL Super Bowl Champion - NE Patriots",
        details:
          "Joe Andruzzi spent nine years in the NFL, where he won three Super Bowl titles with the New England " +
          "Patriots. In recognition of his contributions, Andruzzi received the Ed Block Courage Award in 2002 and the first " +
          "Ron Burton Community Service Award in 2003.<p>In 2001, Abruzzi's three brothers, who were all NYC firefighters, " +
          "responded to the attacks on the World Trade Center on September 11th. During pregame introductions at the next " +
          "game on September 23, Andruzzi ran out to the field with an American flag in each hand. His brothers were honored " +
          "at midfield prior to kickoff.</p><p>On April 15, 2013, Andruzzi’s non-profit foundation was hosting an event in " +
          "Boston in support of the runners, when the 2013 Boston Marathon bombings occurred. In the aftermath, he was " +
          "photographed carrying an injured woman to safety.</p><p>Joe is a survivor of an aggressive form of non-Hodgkin’s " +
          "Burkitt’s lymphomais. He is a fighter not just for himself, but also for his community. After completing treatment, " +
          "the Andruzzi family founded the Joe Andruzzi Foundation in 2008. They are committed to tackling cancer’s impact by " +
          "providing financial assistance for patients and their families as well as funding pediatric brain cancer research.</p>"
      },
      {
        name: "Mary Ellen Clark",
        imageUrl: "assets/imgs/team/mary-ellen-clark.jpg",
        title: "Olympic Athlete / Diving",
        details:
          "Mary Ellen Clark is a two-time Olympic Medalist, winning Bronze Medals at the 1996 Atlanta Games and the " +
          "1992 Barcelona Games. In addition, she was a member of the United States National Diving team for 10 years and won " +
          "seven National Championship titles. Mary Ellen can validate that proper nutrition is required to fuel the body of " +
          "an athlete. Being introduced to the Isagenix nutrition line, she was highly impressed with the quality of the " +
          "ingredients. She saw Isagenix nutrition as an additional way of helping clients and team members, specifically in " +
          "the areas of weight loss, energy and performance, healthy aging, and wealth creation. Mary Ellen is part of Team " +
          "Isagenix, working alongside professional athletes, fitness champions, and other Olympians, educating the world on " +
          "the benefits of the Isagenix nutritional cleansing and replenishment system to lead a healthy lifestyle."
      },
      {
        name: "Brandon Jacobs",
        imageUrl: "assets/imgs/team/brandon-jacobs.jpg",
        title: "2x NFL Super Bowl Champion - NY Giants",
        details:
          "Brandon Christopher Jacobs (born July 6, 1982) is a former American football running back, who spent the " +
          "majority of his career with the New York Giants of the National Football League (NFL). He was drafted by the " +
          "Giants in the fourth round of the 2005 NFL Draft. He also played one season for the San Francisco 49ers before " +
          "returning to New York for his final season. He played college football at Coffeyville, Auburn, and Southern " +
          "Illinois.<p>Brandon Jacobs grew up in Napoleonville, Louisiana. The only son of a single mother, Janice Jacobs, " +
          "he was raised by his mom and her sisters. His aunt and uncle, Dianne and Phil Cheavious, later became his legal " +
          "guardians. He never had a relationship with his father. Brandon played basketball and football at Assumption High " +
          "School and in his senior year received accolades such as USA Today All-America, Orlando Sentinel All-Southern, " +
          "Prep Star All-Region, and Louisiana Class 4A Most Valuable Offensive Player. He ran for more than 3,000 yards and " +
          "scored 38 touchdowns in that senior campaign.</p><p>Jacobs is larger and heavier than most NFL running backs, " +
          "standing 6’4″ tall and weighing over 264 pounds. He also runs the 100 meters in 10.82 seconds and the 200 meters " +
          "in 21.59. He won two Super Bowls in seven seasons with the New York Giants, and holds the franchise record for " +
          "most career rushing touchdowns.</p><p>Jacobs’ college career started at Coffeyville Community College in " +
          "Coffeyville, Kansas, under the direction of head coach Jeff Leiker and running backs coach Dickie Rolls. " +
          "Coffeyville is a member school of the Kansas Jayhawk Community College Conference. In 2001, his freshman year at " +
          "Coffeyville, he ran for 1,349 yards and 17 TD's and gained Kansas Jayhawk Conference All-Conference honorable " +
          "mention. He was also named the team MVP for CCC. In his sophomore season for the Red Ravens, he racked up 1,896 " +
          "yards and 20 TDs on 267 carries for a 7.1 yard-per-carry average. In light of these efforts, Jacobs was named a " +
          "JUCO All-American and to the KJCCC All-Conference First Team. He once again garnered the Team MVP trophy and was " +
          "also named the recipient of the Reb Russell Memorial Football Scholarship Award. The statistic of 1,896 yards " +
          "rushing ranks second all-time on the Ravens individual season rushing yardage record."
      },
      {
        name: "Joe Ames",
        imageUrl: "assets/imgs/team/joe-ames.jpg",
        title: "2015 Crossfit Masters Champion",
        details:
          "<p>Many parents would be OK setting a strong example for their children. Joe Ames literally embodied the " +
          "example he set, and he proved a trend-setter for his son Ty and daughter Morgan. And, along the way, he became the " +
          "world’s top CrossFit athlete in his age group.</p><p>Ames was the champion in the Masters Men’s 50-54 age group at " +
          "the CrossFit Games July 21-26 at StubHub Center in Carson, Calif.</p><p>The Foxboro resident finished from second " +
          "to fifth in all seven events in which he competed, topping a country-wide crop of 20 athletes.</p><p>“Consistency " +
          "is the name of the game when you get out there,” Ames said. “You don’t have to win events. You just have to be " +
          "consistently good.”</p><p>Ames’ second-place finishes came in the thruster — essentially, a weightlifting motion " +
          "that combines a front squat and a push press — and the long chipper, a varied event involving several diverse " +
          "exercises.</p><p>There was no particular event that worried Ames, who finished 13th a year ago. In his first year " +
          "of qualifying, he had clear strengths and weaknesses, finishing first at the CrossFit Games in one event and last " +
          "in another.</p><p>There was room for improvement.</p><p>“The first time in anything, you realize where your " +
          "weaknesses are,” said Ames, who started compiling a list of those weaknesses on the flight home from last year’s " +
          "event.</p><p>“I could’ve done a lot better,” he said. “I did have holes in my game, I guess you could say. I honed " +
          "in on that.”</p><p>Ames consulted a nutritionist, and the duo slashed several items from his diet. Processed foods " +
          "and alcohol were eliminated — Ames abstained for the duration of the year leading up to the games — and extra " +
          "attention was placed on the particulars of his eating habits.</p><p>He ate entirely to fuel.</p><p>“I always ate " +
          "clean, but it’s not necessarily what you eat, but when you eat it,” said Ames, who was particularly floored by the " +
          "chemical effects of alcohol. “I took that to heart. To rule that out for seven months is a big sacrifice. Alcohol " +
          "will slow down any gains you’re trying to achieve, and you can’t out-train a bad diet.”</p><p>In addition to " +
          "incorporating yoga for extra flexibility, Ames also sought out training time with younger athletes for an extra " +
          "performance boost. It worked, and he added to his confidence, as well.</p><p>“I knew anything they threw at us, I " +
          "could probably get through,” Ames said. “It’s always what’s next, what’s next. It’s in my genetic makeup that I " +
          "have to have something to keep me motivated.”</p><p>At the CrossFit Games, Ames plowed through each event — " +
          "running, jumping, lifting — a myriad of bodily challenges.</p><p>He competed alongside some of the sport’s more " +
          "well-known personalities — naturally, the younger athletes. His steady performances granted him a steady lead, all " +
          "culminating with his age group’s title “Fittest in the World.”</p><p>Hundreds, Ames claimed, watched live from " +
          "home, texting him freeze-frame photos of him competing at the CrossFit Games. His phone was going through a " +
          "challenging workout of its own, doing the heavy lifting on barrages of calls, texts and social media posts.</p><p>" +
          "His supporters were rewarded when Ames brought home the championship.</p><p>“The thing I find really cool is, I’m " +
          "51 years old, and I’m No. 1 in the world at something,” Ames said.</p><p>Being the best in the world at something " +
          "allowed Ames to let his guard down, albeit briefly.</p><p>The Ames family recently got away for a vacation, and " +
          "stopped at a diner in Maine. Ames ordered pasta and indulged himself with some of Ty’s chicken tenders. The former " +
          "item he’d severely cut down on, and he’d completely eliminated fried foods. The resulting illness proved a testament " +
          "to the commitment of his endeavor.</p><p>But, therein laid Ames’ most treasured result of his CrossFit Games title: " +
          "Celebration aside, Ames’ children are following his lead.</p><p>Ty is eating more chicken — and not always fried — " +
          "and working to achieve the same physical stature as the premier athletes surrounding his father at the competition. " +
          "Morgan is off pasta, and competing for a spot on the Merrimack women’s lacrosse team.</p><p>Good habits can be " +
          "difficult to maintain, but the Ames support group is larger than just the world’s fittest 51-year-old.</p><p>“It " +
          "gives me goose bumps to think about it,” Ames said. “(Ty and Morgan) are watching me, and now they’re eating great. " +
          "If there’s one cool byproduct of this whole thing, it’s that they’re living a healthy lifestyle, too.”</p>"
      }
    ];
  }
}
