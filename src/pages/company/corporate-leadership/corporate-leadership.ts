import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';

@IonicPage()
@Component({
  selector: "page-corporate-leadership",
  templateUrl: "corporate-leadership.html"
})
export class CorporateLeadershipPage {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private gap: GoogleAnalyticsProvider
  ) {}

  openPersonModal(person: string) {
    var data: any;

    switch (person) {
      case "jim-coover":
        data = {
          personName: "Jim Coover",
          personTitle: "Co-Founder and Chief Executive Officer",
          imageSrc: "../../../assets/imgs/company/jim-coover.jpg",
          details:
            "With more than 35 years of experience, Jim Coover is widely considered a pioneer in the weight-loss and nutrition " +
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
          imageSrc: "../../../assets/imgs/company/kathy-coover.jpg",
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

      case "travis-ogden":
        data = {
          personName: "Travis Ogden",
          personTitle: "President and Chief Operating Officer",
          imageSrc: "../../../assets/imgs/company/travis-ogden.jpg",
          details: "Travis is a seasoned executive with more than 12 years in the network marketing industry. In his role " +
            "as President and Chief Operating Officer, Travis is committed to helping Isagenix continue to positively impact " +
            "world health and build upon the tremendous success the company has had. Prior to Isagenix, Travis served as " +
            "Chief Operating Officer and Chief Financial Officer in his former company, where he spearheaded growth on a " +
            "global level, ultimately aiding the organization in surpassing $1 billion in annual global sales.<p>Travis " +
            "has a Bachelor of Science in Accounting and a Master of Business Administration from the University of Utah. He " +
            "is also a Certified Public Accountant and is married with five children.</p>"
        };
        break;

      case "travis-garza":
        data = {
          personName: "Travis Garza",
          personTitle: "Chief Sales and Marketing Officer",
          imageSrc: "../../../assets/imgs/company/travis-garza.jpg",
          details: "Travis has over 15 years of sales leadership and extensive experience in the network-marketing arena. " +
            "Prior to joining Isagenix, Travis served as the National Vice President of Sales at a direct sales company " +
            "where he helped catapult that company to nearly a $1 billion in sales. He understands the importance of working " +
            "with leaders to help them maximize their compensation plan and reach their sales goals.<p>Travis holds a " +
            "bachelor’s degree in Business Administration with an emphasis in Marketing. He is married with four children.</p>"
        };
        break;

      case "justin-powell":
        data = {
          personName: "Justin Powell",
          personTitle: "Chief Legal Officer and General Counsel",
          imageSrc: "../../../assets/imgs/company/justin-powell.jpg",
          details: "Justin advises Isagenix on a wide variety of legal and business matters and is striving to ensure that " +
            "Isagenix leads the industry with its responsible business practices. In addition to managing the legal " +
            "department, Justin is responsible for global compliance, human resources, and public relations. He also " +
            "supports various operational aspects of the business, including international expansion. In 2013, he earned an " +
            "award for Excellence in Member Services and in 2014 he received the prestigious CEO’s Award for Global " +
            "Achievement. <p>Prior to joining Isagenix in 2012, Justin served as in-house counsel for another global health " +
            "and wellness company that he helped grow to over $1 billion in annual sales during his tenure there. He began " +
            "his legal career in 2002 in New York City with the international law firm Davis Polk & Wardwell. Justin holds " +
            "bachelor’s degrees in Communications and Political Science from the University of Utah, where he graduated magna " +
            "cum laude in both majors. He earned his law degree with honors from Cornell Law School and served as Managing " +
            "Editor of the Cornell Law Review. Justin is married with three children.</p>"
        };
        break;

      case "jon-robinson":
        data = {
          personName: "Jon Robinson",
          personTitle: "Chief Information Officer",
          imageSrc: "../../../assets/imgs/company/jon-robinson.jpg",
          details: "Over the past 20 years, Jon has worked on diverse projects to help businesses realize the power of " +
            "technology. Throughout his career, he has applied his extensive knowledge and expertise to architecting " +
            "solutions for e-commerce, supply chain, and many other business functions. Since he joined Isagenix in 2008, " +
            "Jon has been integral in shaping how the company uses current technology to conduct business and support " +
            "global activities on the Web and internally. His teams are the driving force behind all applications built to " +
            "support operations and processes for the Supply Chain, R&D, Finance, Customer Service, and Marketing/Sales " +
            "teams. Jon holds a Bachelor of Science in Mathematics from the University of Arizona and a Master of Science " +
            "in Information Management from Arizona State University."
        };
        break;

      case "tim-jones":
        data = {
          personName: "Tim Jones",
          personTitle: "Chief Financial Officer",
          imageSrc: "../../../assets/imgs/company/tim-jones.jpg",
          details: "Tim is a seasoned accountant with more than 20 years in the field. In his role as Chief Financial " +
            "Officer, Tim develops and implements financial strategies that align with the company’s vision and business " +
            "objectives while overseeing the company’s day-to-day financials. Throughout his career, Tim has been " +
            "instrumental in championing global product pricing models and implementing key initiatives that play a role " +
            "in increasing sound decision making, accountability, and efficiency throughout the organization.<p>Tim " +
            "graduated cum laude with a Bachelor of Science in accounting and earned a Master of Accounting with honors " +
            "from Brigham Young University. He is a certified public accountant and is married with four children.</p>"
        };
        break;

      case "robert-kay":
        data = {
          personName: "Robert 'Bob' Kay, Ph.D.",
          personTitle: "Chief Science Officer",
          imageSrc: "../../../assets/imgs/company/robert-kay.jpg",
          details: "Bob has more than 25 years of experience leveraging business and science to create innovative, " +
            "market-leading products. As Chief Science Officer, Bob oversees the research and development, product design " +
            "and development, product commercialization, and quality assurance of all Isagenix products. Prior to joining " +
            "our corporate team, Bob was the Chief Science Officer for his last three companies, which averaged $50 million " +
            "to $70 billion annually, devising and monetizing new products that drove hundreds of millions of dollars in " +
            "global revenue.<p>Bob holds a Bachelor of Arts in psychology, a Master of Science in nutritional science, and " +
            "a doctorate in nutritional science from the University of Connecticut. He is also a certified CGMP instructor " +
            "and former registered dietitian.</p>"
        };
        break;

      case "erik-coover":
        data = {
          personName: "Erik Coover",
          personTitle: "St. Vice President of Global Field Development",
          imageSrc: "../../../assets/imgs/company/erik-coover.jpg",
          details: "Erik Coover is the force behind the worldwide movement to unite the next generation of leaders as he " +
            "continues to build a legacy company. Steadfast in his passion to “bring out the best” in people, he is " +
            "dedicated to challenging the status quo by leading others to discover healthy lifestyle solutions and an " +
            "opportunity to build a brighter future for themselves and for the world in which they live.<p>Today, Erik " +
            "leads with experience, having built his own six-figure income as an Isagenix Associate, during his education " +
            "at Arizona State University. After graduating with a Bachelor of Arts degree in Business Communications, Erik " +
            "joined the Isagenix World Headquarters to support the entire field of Associates.</p>"
        };
        break;

      case "chantal-chaput":
        data = {
          personName: "Chantal Chaput",
          personTitle: "Senior Vice President of Operations",
          imageSrc: "../../../assets/imgs/company/chantal-chaput.jpg",
          details: "Chantal brings more than 25 years of global manufacturing experience to Isagenix. She has a deep acumen " +
            "and strong knowledge of profit and loss management, engineering, product commercialization, logistics, cost " +
            "containment, quality, and safety. As Senior Vice President of Operations, Chantal oversees several manufacturing " +
            "facilities, multifunctional teams, and complex projects that drive the direction of the company. Prior to " +
            "Isagenix, Chantal was the Vice President of Integrated Supply Chain for EU Coffee based in Zurich, Switzerland, " +
            "which is part of the Mondelez $35 billion snack powerhouse represented in 165 countries.<p>Chantal has a Bachelor " +
            "of Science in food chemistry from McGill University.</p>"
        };
        break;

      case "sharron-walsh":
        data = {
          personName: "Sharron Walsh",
          personTitle: "Vice President of International",
          imageSrc: "../../../assets/imgs/company/sharron-walsh.jpg",
          details: "Sharron has more than 18 years of experience in the direct selling industry. Prior to joining Isagenix, " +
            "she built one of the fastest-growing direct sales and marketing companies in Australia. Sharron excels at " +
            "building strong direct sales teams and driving overall business growth.<p>Before joining the team at our " +
            "corporate headquarters in Chandler, Sharron led our operations in Australia and New Zealand for five years, " +
            "where she brought remarkable growth and stability to those markets.</p>"
        };
        break;

      case "dave-pickrell":
        data = {
          personName: "Dave Pickrell",
          personTitle: "Vice President of Program Management Office",
          imageSrc: "../../../assets/imgs/company/dave-pickrell.jpg",
          details: "Dave, an information technology specialist, has more than 20 years of executive level experience as a " +
            "P&L leader and people developer. He’s a seasoned IT professional who brings valuable project management, " +
            "financial, and operational skills to the Isagenix management team. Dave most recently was the president and " +
            "CEO of MergerTree Solutions, LP, a small venture-backed IT hosting and outsourcing services company in " +
            "Houston, Texas.<p>Dave has a Bachelor of Business Administration degree and an MBA from the University of " +
            "Oklahoma. He’s also a graduate of the Kellogg Executive Program for Ernst & Young Partners – Northwestern " +
            "University, and is a former U.S. Navy officer and pilot.</p>"
        };
        break;

      case "patty-raphael":
        data = {
          personName: "Patty Raphael",
          personTitle: "Vice President of Opportunity Solutions",
          imageSrc: "../../../assets/imgs/company/patty-raphael.jpg",
          details: "Patty is a marketing executive passionate about servant leadership, teamwork and creating great " +
            "customer experiences. She excels at identifying problems, defining a vision for change, and empowering others " +
            "to contribute and take actions that will make the vision happen. As a leader in brand and relationship " +
            "marketing, Patty creates and motivates teams to build “Wow” connections that inspire audiences to engage, " +
            "trust, buy and—ultimately—be advocates of a company that transforms lives.<p>Paty wants to learn from, and " +
            "build relationships with, people who are strategically building great customer experiences and who always " +
            "strive to do it better."
        };
        break;

      case "richard-stagg":
        data = {
          personName: "Richard Stagg",
          personTitle: "Vice President of Legal",
          imageSrc: "../../../assets/imgs/company/richard-stagg.jpg",
          details: "Richard has nearly 30 years of experience in private practice, advising companies and individuals on a " +
            "wide variety of legal issues. Richard is responsible for ensuring compliance with regulations issued by the " +
            "governing authorities in the countries where Isagenix operates and also advises, assists, and educates Isagenix " +
            "Associates on how to build their businesses in a compliant, ethical, and effective manner. Prior to joining " +
            "Isagenix, Richard was a partner in the business and finance group of Snell & Wilmer L.L.P. Richard holds a " +
            "bachelor’s degree in Economics from the University of Arizona and a law degree with honors from the UCLA School " +
            "of Law."
        };
        break;

      case "deborah-mathews":
        data = {
          personName: "Deborah Mathews",
          personTitle: "Vice President of Human Resources",
          imageSrc: "../../../assets/imgs/company/deborah-mathews.jpg",
          details: "With 22 years of experience leading human resource teams for global Fortune 500 companies including " +
            "Motorola and Intel, Deborah’s core emphasis is to align people, create strategy and maximize performance within " +
            "an organization. She is an expert in multi-faceted human resource disciplines including talent acquisition, " +
            "organizational effectiveness, mergers and acquisitions, and employee relations. During the course of her career, " +
            "Deborah has held senior leadership and consultative roles in which she worked to design and re-design several " +
            "human resource organizations, focusing on stakeholder relationships and business achievement. In 2007, Deborah " +
            "joined Isagenix and immediately began working to attract and retain a high-performing and diverse workforce. " +
            "Within her own team, she has developed a world-class human resources department by leveraging a team of " +
            "individuals, each with a unique background, to help support and spearhead the company’s overall strategic " +
            "objectives and continued growth. Deborah graduated from Arizona State University with a Bachelor of Science in " +
            "Marketing and Management."
        };
        break;

      case "doug-jensen":
        data = {
          personName: "Doug Jensen",
          personTitle: "Vice President of Sales Programs and Strategy",
          imageSrc: "../../../assets/imgs/company/doug-jensen.jpg",
          details: "Doug has over 20 years of corporate leadership and sales experience with over 10 years in the network " +
            "marketing industry. He finds the ultimate satisfaction in helping individuals find both the will and skill in " +
            "developing strategies to improve their lives, both physically and financially. Doug has held leadership roles " +
            "with Franklin Covey and was the General Manager and Vice President of Sales at an Inc. 500 fastest-growing " +
            "company. Doug served as Director of Sales over the U.S. and Canada for a leading health and nutritional " +
            "supplement company prior to joining Isagenix. Doug holds a Bachelor of Science in Technical Sales from Weber " +
            "State University. He is married with six children."
        };
        break;

      case "david-wood":
        data = {
          personName: "David Wood",
          personTitle: "Strategic Training Consultant",
          imageSrc: "../../../assets/imgs/company/david-wood.jpg",
          details: "David Wood has developed a world-class personal development training program for Isagenix® and has " +
            "trained hundreds of top leaders. David has lived, traveled and worked in more than 40 countries and has grown " +
            "several multi-million and million-dollar companies. He was a lead trainer for Peak Potentials Training, the " +
            "fastest and largest growing personal development company in the world and is internationally recognized as the " +
            "“Trainer’s Trainer.” Known for his uncanny ability to read his audience and move people to the next level in " +
            "their lives, his programs are exciting, engaging, effective and fun. His philosophy is simple: “Real people " +
            "need real results.” He believes that he can give things that they can take home and apply immediately with " +
            "their spouses, children, friends and community. These are things that allow them to be open and available, " +
            "authentic, and in the moment."
        };
        break;
    }

    const myModal = this.modalCtrl.create("PersonModalPage", data);
    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("CorporateLeadershipPage");
  }
}
