import axios from 'axios';

const config = {
  headers:{
    'content-type':'application/json'    
  }
}
export const GoogleSearchforScrape = async (reqparams:any):Promise<any> => {
  const form_data = new FormData();
  form_data.append('query',reqparams.query);
  form_data.append('ads',reqparams.ads);
  form_data.append('location',reqparams.location);
  form_data.append('hl',reqparams.hl);

 

  await axios.post('/labs/api/scrape/googlesearch/',form_data,config)
  .then(res=>{
      if(res.data.httpCode ===200){
          const respdata = {
              error:false,
              resultdata:res.data.result.results
          }
          return respdata
      }else{
        const respdata = {
            error:true,
            resultdata:[]
        }
          return  respdata;
      }

  }).catch(err=>{
    const respdata = {
        error:true,
        resultdata:[]
    }
      return  respdata;
  })
}
// type subdataprops = 
//     {
//         title: string;
//         adUrl?: string|null|undefined;        
//         url: string;
//         trimmedUrl: string;
//         text: string;
//         ad: boolean;
//         position: number|string;

// }

// type dataprops={
//     status: string;
//     date?:number|string|null;
//     httpCode?: 0;
//     result: {
//         query: string;
//         page?: number|string|null;
//         date: string;
//         location: string;
//         resultsTotal: number;
//         results: subdataprops[]}}
export const data = 
//   "status": "SUCCESS",
//   "date": "Fri, 02 Jul 2021 13:59:19 GMT",
//   "httpCode": 0,
//   "result": {
//       "query": "",
//       "page": 1,
//       "date": "Fri, 02 Jul 2021 13:59:51 GMT",
//       "location": "Passed: India",
//       "resultsTotal": 100,
      [
          {
              "title": "",
              "adUrl": "https://www.google.com/aclk?sa=l&ai=DChcSEwj_uIySxsTxAhVrGQYAHXRjAgAYABADGgJ3cw&ae=2&sig=AOD64_3AiYv09VNy4FUD9WAiw8_heWoarg&adurl=&q=",
              "url": "https://",
              "trimmedUrl": "https:///",
              "text": "Our Proven Marketing Solution Gets You A Head Start & Helps You Hit Your Marketing Target. Speak to our Marketing Strategist Today and Learn How we deliver great solutions!",
              "ad": true,
              "position": "1Fri Jul 02 2021 13:59:51 GMT+0000 (Coordinated Universal Time)"
          },
          {
              "title": "",
              "adUrl": "https://www.google.com/aclk?sa=l&ai=DChcSEwj_uIySxsTxAhVrGQYAHXRjAgAYABAAGgJ3cw&ae=2&sig=AOD64_24xmIemQ7suqBECCko9lqNlj7OKA&q&adurl",
              "url": "https://www.iqfoundry.com/",
              "trimmedUrl": "https://www.iqfoundry.com/",
              "text": "Creative solutions in web design & development, interactive and video marketing. Since 2005. Your Trusted Partner. Services: Web Design, Web Development, Interactive Experiences.",
              "ad": true,
              "position": "2Fri Jul 02 2021 13:59:51 GMT+0000 (Coordinated Universal Time)"
          },
          {
              "title": "",
              "adUrl": "https://www.google.com/aclk?sa=l&ai=DChcSEwj_uIySxsTxAhVrGQYAHXRjAgAYABACGgJ3cw&ae=2&sig=AOD64_0ppuZ0g49kV6XogCNBAiVcQQx3Hg&adurl=&q=",
              "url": "https://",
              "trimmedUrl": "https:///",
              "text": "We're On Top! Our Digital Marketing Agency Can Help Your Ad Be On Top Of This Page Too. Stay Competitive In An Ever-Changing Digital Landscape. Request A Quote Now! Free SEO Audit. Content Marketing. Website Optimization. On-page & Off-page SEO.",
              "ad": true,
              "position": "3Fri Jul 02 2021 13:59:51 GMT+0000 (Coordinated Universal Time)"
          },
          {
              "title": "Digital Marketing Definition - What is Digital Marketing?",
              "adUrl": "",
              "url": "https://mailchimp.com/marketing-glossary/digital-marketing/",
              "trimmedUrl": "https://mailchimp.com/",
              "text": "",
              "ad": false,
              "position": 1
          },
          {
              "title": "Digital Marketing Definition - What is Digital Marketing?",
              "adUrl": "",
              "url": "https://mailchimp.com/marketing-glossary/digital-marketing/",
              "trimmedUrl": "https://mailchimp.com/",
              "text": "",
              "ad": false,
              "position": 2
          },
          {
              "title": "The Who, What, Why, & How of Digital Marketing - HubSpot Blog",
              "adUrl": "",
              "url": "https://blog.hubspot.com/marketing/what-is-digital-marketing",
              "trimmedUrl": "https://blog.hubspot.com/",
              "text": "",
              "ad": false,
              "position": 3
          },
          {
              "title": "What is Digital Marketing and How Do I Get Started? | Disruptive",
              "adUrl": "",
              "url": "https://disruptiveadvertising.com/marketing/digital-marketing/",
              "trimmedUrl": "https://disruptiveadvertising.com/",
              "text": "",
              "ad": false,
              "position": 4
          },
          {
              "title": "What is Digital Marketing? (Learn it in 5 Minutes) - Neil Patel",
              "adUrl": "",
              "url": "https://neilpatel.com/what-is-digital-marketing/",
              "trimmedUrl": "https://neilpatel.com/",
              "text": "",
              "ad": false,
              "position": 5
          },
          {
              "title": "What is Digital Marketing? - Marketo",
              "adUrl": "",
              "url": "https://www.marketo.com/digital-marketing/",
              "trimmedUrl": "https://www.marketo.com/",
              "text": "",
              "ad": false,
              "position": 6
          },
          {
              "title": "Digital Marketing Agency in Toronto | SEO & PPC | Bloom",
              "adUrl": "",
              "url": "https://www.makeitbloom.com/contact/toronto/",
              "trimmedUrl": "https://www.makeitbloom.com/",
              "text": "",
              "ad": false,
              "position": 7
          },
          {
              "title": "Digital marketing - Wikipedia",
              "adUrl": "",
              "url": "https://en.wikipedia.org/wiki/Digital_marketing",
              "trimmedUrl": "https://en.wikipedia.org/",
              "text": "",
              "ad": false,
              "position": 8
          },
          {
              "title": "What are the 7 Types of Digital Marketing?",
              "adUrl": "",
              "url": "https://www.snhu.edu/about-us/newsroom/2017/11/types-of-digital-marketing",
              "trimmedUrl": "https://www.snhu.edu/",
              "text": "",
              "ad": false,
              "position": 9
          },
          {
              "title": "What is digital marketing? | Oracle Canada",
              "adUrl": "",
              "url": "https://www.oracle.com/ca-en/cx/marketing/digital-marketing/",
              "trimmedUrl": "https://www.oracle.com/",
              "text": "",
              "ad": false,
              "position": 10
          },
          {
              "title": "Digital Marketing Agency Toronto | Internet Marketing Company",
              "adUrl": "",
              "url": "https://www.markovate.com/",
              "trimmedUrl": "https://www.markovate.com/",
              "text": "",
              "ad": false,
              "position": 11
          },
          {
              "title": "The Ultimate Guide to Digital Marketing | DigitalMarketer",
              "adUrl": "",
              "url": "https://www.digitalmarketer.com/digital-marketing/",
              "trimmedUrl": "https://www.digitalmarketer.com/",
              "text": "",
              "ad": false,
              "position": 12
          },
          {
              "title": "Digital Marketing Course Toronto | BrainStation®",
              "adUrl": "",
              "url": "https://brainstation.io/course/toronto/digital-marketing",
              "trimmedUrl": "https://brainstation.io/",
              "text": "",
              "ad": false,
              "position": 13
          },
          {
              "title": "Top Digital Marketing Agencies in Toronto - 2021 Reviews ...",
              "adUrl": "",
              "url": "https://clutch.co/ca/agencies/digital-marketing/toronto",
              "trimmedUrl": "https://clutch.co/",
              "text": "",
              "ad": false,
              "position": 14
          },
          {
              "title": "Top Digital Marketing Agencies in Canada - 2021 Reviews ...",
              "adUrl": "",
              "url": "https://clutch.co/ca/agencies/digital-marketing",
              "trimmedUrl": "https://clutch.co/",
              "text": "",
              "ad": false,
              "position": 15
          },
          {
              "title": "Digital Marketing 101: Core Components to Know | What Is ...",
              "adUrl": "",
              "url": "https://www.bluecorona.com/blog/digital-marketing-101/",
              "trimmedUrl": "https://www.bluecorona.com/",
              "text": "",
              "ad": false,
              "position": 16
          },
          {
              "title": "Digital Marketing Agency Toronto Canada - seoplus+",
              "adUrl": "",
              "url": "https://www.seoplus.ca/digital-marketing-agency/",
              "trimmedUrl": "https://www.seoplus.ca/",
              "text": "",
              "ad": false,
              "position": 17
          },
          {
              "title": "Top 33 Digital Marketing Agencies in Toronto - July 2021 ...",
              "adUrl": "",
              "url": "https://upcity.com/local-marketing-agencies/lists/top-digital-marketing-agencies-in-toronto",
              "trimmedUrl": "https://upcity.com/",
              "text": "",
              "ad": false,
              "position": 18
          },
          {
              "title": "Fundamentals of Digital Marketing Course - Google Digital ...",
              "adUrl": "",
              "url": "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing",
              "trimmedUrl": "https://learndigital.withgoogle.com/",
              "text": "",
              "ad": false,
              "position": 19
          },
          {
              "title": "Best Digital Marketing Agencies in Toronto - Digital Agency ...",
              "adUrl": "",
              "url": "https://digitalagencynetwork.com/agencies/toronto/",
              "trimmedUrl": "https://digitalagencynetwork.com/",
              "text": "",
              "ad": false,
              "position": 20
          },
          {
              "title": "Top Digital Marketing Agency | Elite Digital Agency",
              "adUrl": "",
              "url": "https://elitedigitalagency.com/",
              "trimmedUrl": "https://elitedigitalagency.com/",
              "text": "",
              "ad": false,
              "position": 21
          },
          {
              "title": "What is digital marketing and how does it work? | Toronto.com",
              "adUrl": "",
              "url": "https://www.toronto.com/news-story/10307117-what-is-digital-marketing-and-how-does-it-work-/",
              "trimmedUrl": "https://www.toronto.com/",
              "text": "",
              "ad": false,
              "position": 22
          },
          {
              "title": "Become a Digital Marketing Specialist Learning Path ...",
              "adUrl": "",
              "url": "https://www.linkedin.com/learning/paths/become-a-digital-marketing-specialist",
              "trimmedUrl": "https://www.linkedin.com/",
              "text": "",
              "ad": false,
              "position": 23
          },
          {
              "title": "Digital Marketing - Centennial College",
              "adUrl": "",
              "url": "https://www.centennialcollege.ca/programs-courses/full-time/course/digital-marketing/",
              "trimmedUrl": "https://www.centennialcollege.ca/",
              "text": "",
              "ad": false,
              "position": 24
          },
          {
              "title": "Digital Marketing | McMaster CCE",
              "adUrl": "",
              "url": "https://mcmastercce.ca/digital-marketing-cert",
              "trimmedUrl": "https://mcmastercce.ca/",
              "text": "",
              "ad": false,
              "position": 25
          },
          {
              "title": "Digital Marketing Definition - Investopedia",
              "adUrl": "",
              "url": "https://www.investopedia.com/terms/d/digital-marketing.asp",
              "trimmedUrl": "https://www.investopedia.com/",
              "text": "",
              "ad": false,
              "position": 26
          },
          {
              "title": "What is digital marketing? | SAS",
              "adUrl": "",
              "url": "https://www.sas.com/en_ca/insights/marketing/digital-marketing.html",
              "trimmedUrl": "https://www.sas.com/",
              "text": "",
              "ad": false,
              "position": 27
          },
          {
              "title": "Digital Marketing Management | School of Continuing Studies ...",
              "adUrl": "",
              "url": "https://learn.utoronto.ca/programs-courses/certificates/digital-marketing-management",
              "trimmedUrl": "https://learn.utoronto.ca/",
              "text": "",
              "ad": false,
              "position": 28
          },
          {
              "title": "Digital Marketing Services Canada | Marketing Blitz",
              "adUrl": "",
              "url": "https://marketingblitz.ca/",
              "trimmedUrl": "https://marketingblitz.ca/",
              "text": "",
              "ad": false,
              "position": 29
          },
          {
              "title": "Digital Marketing | Social Media Marketing | Digital Marketing ...",
              "adUrl": "",
              "url": "https://www.microswift.ca/digital-marketing",
              "trimmedUrl": "https://www.microswift.ca/",
              "text": "",
              "ad": false,
              "position": 30
          },
          {
              "title": "Digital Marketing | Programs | NSCC",
              "adUrl": "",
              "url": "https://www.nscc.ca/learning_programs/programs/plandescr.aspx?prg=DMKT&pln=DIGMKTG",
              "trimmedUrl": "https://www.nscc.ca/",
              "text": "",
              "ad": false,
              "position": 31
          },
          {
              "title": "Diploma in Digital Marketing Specialist Co-op | Toronto ...",
              "adUrl": "",
              "url": "https://www.torontosom.ca/programs/business/diploma-in-digital-marketing-specialist-co-op",
              "trimmedUrl": "https://www.torontosom.ca/",
              "text": "",
              "ad": false,
              "position": 32
          },
          {
              "title": "Internet Marketing | Digital Marketing Agency in Toronto",
              "adUrl": "",
              "url": "https://www.eccentricbi.com/digital-marketing-planning",
              "trimmedUrl": "https://www.eccentricbi.com/",
              "text": "",
              "ad": false,
              "position": 33
          },
          {
              "title": "The Digital Marketing Agency Toronto, Ontario - Branex",
              "adUrl": "",
              "url": "https://www.branex.ca/digital-marketing-agency/",
              "trimmedUrl": "https://www.branex.ca/",
              "text": "",
              "ad": false,
              "position": 34
          },
          {
              "title": "Digital Marketing Course Toronto - Learn Digital Marketing ...",
              "adUrl": "",
              "url": "https://generalassemb.ly/education/digital-marketing/toronto",
              "trimmedUrl": "https://generalassemb.ly/",
              "text": "",
              "ad": false,
              "position": 35
          },
          {
              "title": "Digital Marketing Strategy: A Framework for Success",
              "adUrl": "",
              "url": "https://vtldesign.com/what-we-do/digital-marketing/digital-marketing-strategy/",
              "trimmedUrl": "https://vtldesign.com/",
              "text": "",
              "ad": false,
              "position": 36
          },
          {
              "title": "H2O Digital Marketing",
              "adUrl": "",
              "url": "https://h2odigital.ca/",
              "trimmedUrl": "https://h2odigital.ca/",
              "text": "",
              "ad": false,
              "position": 37
          },
          {
              "title": "Digital Marketing Agency Toronto - Edkent Media Digital ...",
              "adUrl": "",
              "url": "https://edkentmedia.com/digital-marketing-services/",
              "trimmedUrl": "https://edkentmedia.com/",
              "text": "",
              "ad": false,
              "position": 38
          },
          {
              "title": "Digital Marketing Jobs in Toronto, ON (with Salaries) 2021 ...",
              "adUrl": "",
              "url": "https://ca.indeed.com/Digital-Marketing-jobs-in-Toronto,-ON",
              "trimmedUrl": "https://ca.indeed.com/",
              "text": "",
              "ad": false,
              "position": 39
          },
          {
              "title": "Digital Marketing Agency Toronto | Full-Service Marketing ...",
              "adUrl": "",
              "url": "https://marketingforyou.ca/",
              "trimmedUrl": "https://marketingforyou.ca/",
              "text": "",
              "ad": false,
              "position": 40
          },
          {
              "title": "Jelly Digital Marketing & PR Agency | Vancouver & Fraser Valley",
              "adUrl": "",
              "url": "https://jellymarketing.ca/",
              "trimmedUrl": "https://jellymarketing.ca/",
              "text": "",
              "ad": false,
              "position": 41
          },
          {
              "title": "Zero to Hero steps to Become a Digital Marketing Specialist ...",
              "adUrl": "",
              "url": "https://ciccc.ca/cornerstone-blog/steps-becoming-digital-marketing-specialist/",
              "trimmedUrl": "https://ciccc.ca/",
              "text": "",
              "ad": false,
              "position": 42
          },
          {
              "title": "Digital Marketing - Websites, Email Services & More | Vistaprint",
              "adUrl": "",
              "url": "https://www.vistaprint.ca/digital-marketing",
              "trimmedUrl": "https://www.vistaprint.ca/",
              "text": "",
              "ad": false,
              "position": 43
          },
          {
              "title": "Business Administration Diploma - Digital Marketing Major ...",
              "adUrl": "",
              "url": "https://bowvalleycollege.ca/programs-courses/business/business-administration-diploma---digital-marketing-major",
              "trimmedUrl": "https://bowvalleycollege.ca/",
              "text": "",
              "ad": false,
              "position": 44
          },
          {
              "title": "What is Digital Marketing? A Beginner's Guide (2021 Update ...",
              "adUrl": "",
              "url": "https://www.fiverr.com/resources/guides/digital-marketing/what-is-digital-marketing",
              "trimmedUrl": "https://www.fiverr.com/",
              "text": "",
              "ad": false,
              "position": 45
          },
          {
              "title": "Learn Digital Marketing Online | Nanodegree - Udacity",
              "adUrl": "",
              "url": "https://www.udacity.com/course/digital-marketing-nanodegree--nd018",
              "trimmedUrl": "https://www.udacity.com/",
              "text": "",
              "ad": false,
              "position": 46
          },
          {
              "title": "Business Administration Sales and Digital Marketing Program ...",
              "adUrl": "",
              "url": "https://sprottshaw.com/business/business-administration-sales-digital-marketing-program-with-coop/",
              "trimmedUrl": "https://sprottshaw.com/",
              "text": "",
              "ad": false,
              "position": 47
          },
          {
              "title": "Blueprint Digital Marketing Agency in Toronto",
              "adUrl": "",
              "url": "https://www.blueprintinternetmarketing.com/",
              "trimmedUrl": "https://www.blueprintinternetmarketing.com/",
              "text": "",
              "ad": false,
              "position": 48
          },
          {
              "title": "Top 100 Digital Marketing Companies in Toronto | June 2021",
              "adUrl": "",
              "url": "https://themanifest.com/ca/digital-marketing/agencies/toronto",
              "trimmedUrl": "https://themanifest.com/",
              "text": "",
              "ad": false,
              "position": 49
          },
          {
              "title": "Digital Marketing | Coursera",
              "adUrl": "",
              "url": "https://www.coursera.org/specializations/digital-marketing",
              "trimmedUrl": "https://www.coursera.org/",
              "text": "",
              "ad": false,
              "position": 50
          },
          {
              "title": "Digital Marketing Experts: Home",
              "adUrl": "",
              "url": "https://digitalmarketingexperts.ca/",
              "trimmedUrl": "https://digitalmarketingexperts.ca/",
              "text": "",
              "ad": false,
              "position": 51
          },
          {
              "title": "Find Canada's Best Digital Marketing Courses ...",
              "adUrl": "",
              "url": "https://www.coursecompare.ca/subject/digital-marketing-courses/",
              "trimmedUrl": "https://www.coursecompare.ca/",
              "text": "",
              "ad": false,
              "position": 52
          },
          {
              "title": "Digital Marketing Playbook | Rogers Small Business",
              "adUrl": "",
              "url": "https://www.rogers.com/business/digital-marketing-playbook",
              "trimmedUrl": "https://www.rogers.com/",
              "text": "",
              "ad": false,
              "position": 53
          },
          {
              "title": "Digital Marketing and Social Media Program | Montreal ...",
              "adUrl": "",
              "url": "https://www.trebas.com/programs/business-and-technology-programs/digital-marketing-social-media-montreal",
              "trimmedUrl": "https://www.trebas.com/",
              "text": "",
              "ad": false,
              "position": 54
          },
          {
              "title": "Digital Marketing | Sheridan CollegeContinuing and ...",
              "adUrl": "",
              "url": "https://caps.sheridancollege.ca/products/digital-marketing.aspx",
              "trimmedUrl": "https://caps.sheridancollege.ca/",
              "text": "",
              "ad": false,
              "position": 55
          },
          {
              "title": "12 Effective Digital Marketing Tactics and Strategies in 2021 ...",
              "adUrl": "",
              "url": "https://mikekhorev.com/12-effective-digital-marketing-tactics-strategies",
              "trimmedUrl": "https://mikekhorev.com/",
              "text": "",
              "ad": false,
              "position": 56
          },
          {
              "title": "Digital Marketing Bootcamp - Alacrity Canada",
              "adUrl": "",
              "url": "https://alacritycanada.com/online-digital-marketing-bootcamp/",
              "trimmedUrl": "https://alacritycanada.com/",
              "text": "",
              "ad": false,
              "position": 57
          },
          {
              "title": "Introduction to Digital Marketing for Business | BE READY",
              "adUrl": "",
              "url": "https://lethbridgecollege.ca/departments/corporate-and-continuing-education/non-credit-courses/introduction-digital-marketing",
              "trimmedUrl": "https://lethbridgecollege.ca/",
              "text": "",
              "ad": false,
              "position": 58
          },
          {
              "title": "Zigma Internet Marketing | Digital & Internet Marketing ...",
              "adUrl": "",
              "url": "https://zigma.ca/",
              "trimmedUrl": "https://zigma.ca/",
              "text": "",
              "ad": false,
              "position": 59
          },
          {
              "title": "Digital Marketing Suite | Get Found Everywhere Online ...",
              "adUrl": "",
              "url": "https://ca.godaddy.com/online-marketing/digital-marketing-suite",
              "trimmedUrl": "https://ca.godaddy.com/",
              "text": "",
              "ad": false,
              "position": 60
          },
          {
              "title": "100-101: Facebook Certified Digital Marketing Associate ...",
              "adUrl": "",
              "url": "https://www.facebook.com/business/learn/certification/exams/100-101-exam",
              "trimmedUrl": "https://www.facebook.com/",
              "text": "",
              "ad": false,
              "position": 61
          },
          {
              "title": "Digital Marketing Certificate Programs | eCornell",
              "adUrl": "",
              "url": "https://ecornell.cornell.edu/certificates/marketing/digital-marketing/",
              "trimmedUrl": "https://ecornell.cornell.edu/",
              "text": "",
              "ad": false,
              "position": 62
          },
          {
              "title": "Digital Marketing Communications (DMC) - St Lawrence",
              "adUrl": "",
              "url": "https://www.stlawrencecollege.ca/programs/digital-marketing-communications/full-time/kingston",
              "trimmedUrl": "https://www.stlawrencecollege.ca/",
              "text": "",
              "ad": false,
              "position": 63
          },
          {
              "title": "Toronto Digital Marketing Agency & Top Digital Marketing ...",
              "adUrl": "",
              "url": "https://www.variancemarketing.com/",
              "trimmedUrl": "https://www.variancemarketing.com/",
              "text": "",
              "ad": false,
              "position": 64
          },
          {
              "title": "Digital Marketing Certificate - Telfer School of Management",
              "adUrl": "",
              "url": "https://telfer.uottawa.ca/en/digital-marketing-certificate/",
              "trimmedUrl": "https://telfer.uottawa.ca/",
              "text": "",
              "ad": false,
              "position": 65
          },
          {
              "title": "Certificate in Digital Marketing",
              "adUrl": "",
              "url": "https://continue.yorku.ca/programs/certificate-in-digital-marketing/",
              "trimmedUrl": "https://continue.yorku.ca/",
              "text": "",
              "ad": false,
              "position": 66
          },
          {
              "title": "Digital Marketing - Reddit",
              "adUrl": "",
              "url": "https://www.reddit.com/r/DigitalMarketing/",
              "trimmedUrl": "https://www.reddit.com/",
              "text": "",
              "ad": false,
              "position": 67
          },
          {
              "title": "Digital Marketing - UAlberta Extension - University of Alberta",
              "adUrl": "",
              "url": "https://ext.ualberta.ca/enroll/digital-marketing",
              "trimmedUrl": "https://ext.ualberta.ca/",
              "text": "",
              "ad": false,
              "position": 68
          },
          {
              "title": "Operatio Marketing: Toronto Based Digital Marketing Agency",
              "adUrl": "",
              "url": "https://www.operatiomarketing.com/",
              "trimmedUrl": "https://www.operatiomarketing.com/",
              "text": "",
              "ad": false,
              "position": 69
          },
          {
              "title": "Digital Marketing| Online Marketing | Internet Marketing",
              "adUrl": "",
              "url": "https://rocketdigital.ca/digital-marketing/",
              "trimmedUrl": "https://rocketdigital.ca/",
              "text": "",
              "ad": false,
              "position": 70
          },
          {
              "title": "Digital Marketing Toronto On - Deloitte Jobs",
              "adUrl": "",
              "url": "https://careers.deloitte.ca/key/digital-marketing-toronto-on.html",
              "trimmedUrl": "https://careers.deloitte.ca/",
              "text": "",
              "ad": false,
              "position": 71
          },
          {
              "title": "Digital Marketing Toronto | Search Engine Optimization ...",
              "adUrl": "",
              "url": "https://thebestmedia.com/digital-marketing",
              "trimmedUrl": "https://thebestmedia.com/",
              "text": "",
              "ad": false,
              "position": 72
          },
          {
              "title": "Chameleon Digital Media: Digital Marketing Agency Toronto",
              "adUrl": "",
              "url": "https://www.chameleondigitalmedia.com/",
              "trimmedUrl": "https://www.chameleondigitalmedia.com/",
              "text": "",
              "ad": false,
              "position": 73
          },
          {
              "title": "Bluehat Marketing: SEO Agency in Montreal QC | Digital ...",
              "adUrl": "",
              "url": "https://bluehatmarketing.com/",
              "trimmedUrl": "https://bluehatmarketing.com/",
              "text": "",
              "ad": false,
              "position": 74
          },
          {
              "title": "Digital Marketing - Capilano University Continuing Studies",
              "adUrl": "",
              "url": "https://cs.capilanou.ca/courses--programs/programs/digital-marketing/",
              "trimmedUrl": "https://cs.capilanou.ca/",
              "text": "",
              "ad": false,
              "position": 75
          },
          {
              "title": "Digital Marketing | Destination BC",
              "adUrl": "",
              "url": "https://www.destinationbc.ca/learning-centre/category/digital-marketing/",
              "trimmedUrl": "https://www.destinationbc.ca/",
              "text": "",
              "ad": false,
              "position": 76
          },
          {
              "title": "What Does a Digital Marketer Do? | DMI - Digital Marketing ...",
              "adUrl": "",
              "url": "https://digitalmarketinginstitute.com/blog/what-does-a-digital-marketer-do",
              "trimmedUrl": "https://digitalmarketinginstitute.com/",
              "text": "",
              "ad": false,
              "position": 77
          },
          {
              "title": "Digital Media Marketing Program (Postgraduate) B413 ...",
              "adUrl": "",
              "url": "https://www.georgebrown.ca/programs/digital-media-marketing-program-postgraduate-b413",
              "trimmedUrl": "https://www.georgebrown.ca/",
              "text": "",
              "ad": false,
              "position": 78
          },
          {
              "title": "Digital Marketing Agency in Toronto | Top Rated Online ...",
              "adUrl": "",
              "url": "https://mrkt360.com/digital-marketing-agency-toronto/",
              "trimmedUrl": "https://mrkt360.com/",
              "text": "",
              "ad": false,
              "position": 79
          },
          {
              "title": "iRISEmedia: Digital Marketing Agency in Toronto",
              "adUrl": "",
              "url": "https://irisemedia.com/",
              "trimmedUrl": "https://irisemedia.com/",
              "text": "",
              "ad": false,
              "position": 80
          },
          {
              "title": "Top Digital Marketing Agency Toronto | Social Media Experts",
              "adUrl": "",
              "url": "https://assetdigitalcom.com/",
              "trimmedUrl": "https://assetdigitalcom.com/",
              "text": "",
              "ad": false,
              "position": 81
          },
          {
              "title": "BCIT : : MKTG 1352 - Digital Marketing",
              "adUrl": "",
              "url": "https://www.bcit.ca/study/courses/mktg1352",
              "trimmedUrl": "https://www.bcit.ca/",
              "text": "",
              "ad": false,
              "position": 82
          },
          {
              "title": "Conversion Digital | Digital Marketing | Toronto, Ontario",
              "adUrl": "",
              "url": "https://www.conversiondigital.ca/",
              "trimmedUrl": "https://www.conversiondigital.ca/",
              "text": "",
              "ad": false,
              "position": 83
          },
          {
              "title": "Social Media - Seneca, Toronto, Canada - Seneca College",
              "adUrl": "",
              "url": "https://www.senecacollege.ca/programs/fulltime/SMD.html",
              "trimmedUrl": "https://www.senecacollege.ca/",
              "text": "",
              "ad": false,
              "position": 84
          },
          {
              "title": "Sparked Digital | Toronto Digital Marketing Agency",
              "adUrl": "",
              "url": "https://sparkeddigital.ca/",
              "trimmedUrl": "https://sparkeddigital.ca/",
              "text": "",
              "ad": false,
              "position": 85
          },
          {
              "title": "10 Challenges All Marketers Face & How Digital Marketing ...",
              "adUrl": "",
              "url": "https://www.roionline.com/blog/digital-marketing-for-business",
              "trimmedUrl": "https://www.roionline.com/",
              "text": "",
              "ad": false,
              "position": 86
          },
          {
              "title": "The History and Evolution of Digital Marketing [Updated]",
              "adUrl": "",
              "url": "https://www.simplilearn.com/history-and-evolution-of-digital-marketing-article",
              "trimmedUrl": "https://www.simplilearn.com/",
              "text": "",
              "ad": false,
              "position": 87
          },
          {
              "title": "Digital Marketing Professional - NAIT",
              "adUrl": "",
              "url": "https://www.nait.ca/coned/digital-marketing-professional",
              "trimmedUrl": "https://www.nait.ca/",
              "text": "",
              "ad": false,
              "position": 88
          },
          {
              "title": "Digital Marketing, SEO, Web Development Company Toronto ...",
              "adUrl": "",
              "url": "https://www.dmxmarketing.com/",
              "trimmedUrl": "https://www.dmxmarketing.com/",
              "text": "",
              "ad": false,
              "position": 89
          },
          {
              "title": "Toronto Digital Marketing | Grow Your Business With Us",
              "adUrl": "",
              "url": "https://torontodigitalmarketinginc.com/",
              "trimmedUrl": "https://torontodigitalmarketinginc.com/",
              "text": "",
              "ad": false,
              "position": 90
          },
          {
              "title": "WebMarketers ™ | Ottawa Web Design & Digital Marketing ...",
              "adUrl": "",
              "url": "https://webmarketers.ca/",
              "trimmedUrl": "https://webmarketers.ca/",
              "text": "",
              "ad": false,
              "position": 91
          },
          {
              "title": "Measure Marketing: Premier Digital Marketing Agency Toronto",
              "adUrl": "",
              "url": "https://measuremarketing.com/",
              "trimmedUrl": "https://measuremarketing.com/",
              "text": "",
              "ad": false,
              "position": 92
          },
          {
              "title": "Goose Digital: Your Partner in Marketing Performance",
              "adUrl": "",
              "url": "https://goosedigital.com/",
              "trimmedUrl": "https://goosedigital.com/",
              "text": "",
              "ad": false,
              "position": 93
          },
          {
              "title": "Digital Marketing Agency Toronto | Vaughan – Xi Digital",
              "adUrl": "",
              "url": "https://www.xi-digital.com/digital-marketing",
              "trimmedUrl": "https://www.xi-digital.com/",
              "text": "",
              "ad": false,
              "position": 94
          },
          {
              "title": "52 Digital Marketing Tips - Marketers Guide - Uhuru Network",
              "adUrl": "",
              "url": "https://uhurunetwork.com/digital-marketing-tips/",
              "trimmedUrl": "https://uhurunetwork.com/",
              "text": "",
              "ad": false,
              "position": 95
          },
          {
              "title": "Top Digital Marketing Courses Online - Updated [July 2021 ...",
              "adUrl": "",
              "url": "https://www.udemy.com/topic/digital-marketing/",
              "trimmedUrl": "https://www.udemy.com/",
              "text": "",
              "ad": false,
              "position": 96
          },
          {
              "title": "Honours Bachelor of Commerce (Digital Marketing ...",
              "adUrl": "",
              "url": "https://www.fanshawec.ca/programs/bdm1-honours-bachelor-commerce-digital-marketing/next",
              "trimmedUrl": "https://www.fanshawec.ca/",
              "text": "",
              "ad": false,
              "position": 97
          }
      ]
//   }
  

