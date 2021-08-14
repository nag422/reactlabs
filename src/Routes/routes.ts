import React from 'react'
import { RouteComponentProps } from "react-router-dom";
import Dashboard from '../components/Dashboard';
import Billing from '../components/Pages/Billing';
import Contact from '../components/Pages/Contact';
import GoogleSearchscrape from '../components/Pages/GoogleSearchscrape';
import ModuleLibrary from '../components/Pages/ModuleLibrary';
import MyProjects from '../components/Pages/MyProjects';
import Usage from '../components/Pages/Usage';
import Facebookposts from '../components/Tools/Facebookposts';
import Geoipvalidation from '../components/Tools/Geoipvalidation';
import Smtpvalidation from '../components/Tools/Smtpvalidation';
import Texttoemails from '../components/Tools/Texttoemails';
import Texttolinks from '../components/Tools/Texttolinks';
import Texttonumbers from '../components/Tools/Texttonumbers';
import UrltoImage from '../components/Tools/UrltoImage';
import Youtubevideorank from '../components/Tools/Youtubevideorank';
import Instagramposts from '../components/Tools/Instagramposts';
export type RouteTypes = {
  path: string;
  title: string;
  icon: string;
  layout: string;
  component:any;
  staticContext?: any;
  
  
};
var routes:RouteTypes [] = [
    {
      path: "/labs/dashboard",
      title: "Dashboard",
      icon: "ni ni-tv-2 text-primary",
      component: Dashboard,
      layout: "/admin"
      
    },
    {
      path: "/labs/my-projects",
      title: "My Projects",
      icon: "ni ni-tv-2 text-primary",
      component: MyProjects,
      layout: "/admin"
      
    },
    {
      path: "/labs/module-library",
      title: "Modules Library",
      icon: "ni ni-tv-2 text-primary",
      component: ModuleLibrary,
      layout: "/admin"
      
    },
    {
      path: "/labs/billing",
      title: "Billing",
      icon: "ni ni-tv-2 text-primary",
      component: Billing,
      layout: "/admin"
      
    },
    {
      path: "/labs/contact",
      title: "Contact",
      icon: "ni ni-tv-2 text-primary",
      component: Contact,
      layout: "/admin"
      
    },
    {
      path: "/labs/usage",
      title: "Usage",
      icon: "ni ni-tv-2 text-primary",
      component: Usage,
      layout: "/admin"
      
    },
    // inner pages
    {
      path: "/labs/input/google",
      title: "Google Search Scrape",
      icon: "ni ni-tv-2 text-primary",
      component: GoogleSearchscrape,
      layout: "/admin"
      
    },
    {
      path: "/labs/url-to-image",
      title: "URL to Image",
      icon: "ni ni-tv-2 text-primary",
      component: UrltoImage,
      layout: "/admin"
      
    },
    {
      path: "/labs/youtube-video-rank",
      title: "YouTube video rank",
      icon: "ni ni-tv-2 text-primary",
      component: Youtubevideorank,
      layout: "/admin"
      
    },
    {
      path: "/labs/text-to-emails",
      title: "Text to Emails",
      icon: "ni ni-tv-2 text-primary",
      component: Texttoemails,
      layout: "/admin"
      
    },
    {
      path: "/labs/html-to-links",
      title: "HTML to Links",
      icon: "ni ni-tv-2 text-primary",
      component: Texttolinks,
      layout: "/admin"
      
    },
    {
      path: "/labs/text-to-phone",
      title: "Text to Phone",
      icon: "ni ni-tv-2 text-primary",
      component: Texttonumbers,
      layout: "/admin"
      
    },
    {
      path: "/labs/email-validation",
      title: "SMTP Email Validation",
      icon: "ni ni-tv-2 text-primary",
      component: Smtpvalidation,
      layout: "/admin"
      
    },
    {
      path: "/labs/ip-validation",
      title: "IP Validation",
      icon: "ni ni-tv-2 text-primary",
      component: Geoipvalidation,
      layout: "/admin"
      
    },
    {
      path: "/labs/fb-posts",
      title: "FaceBook posting",
      icon: "ni ni-tv-2 text-primary",
      component: Facebookposts,
      layout: "/admin"
      
    },
    {
      path: "/labs/insta-posts",
      title: "Instagram posting",
      icon: "ni ni-tv-2 text-primary",
      component: Instagramposts,
      layout: "/admin"
      
    },
    
    
  
  ]
export default routes;