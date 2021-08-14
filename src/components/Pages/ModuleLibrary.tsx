import React from 'react'
import { Grid } from '@material-ui/core'
import ModuleLibraryItem from '../Subcomponents/ModuleLibraryItem'
import { useHistory } from 'react-router-dom'

interface Props {
    history:Window['history']
    
}

const ModuleLibrary = (props: Props) => {
  const history = useHistory()
  const [librarymodules, setLibrarymodules] = React.useState([
    {
      id: 1,
      title: 'Google Search',
      image:'https://scrapingrobot.com/api-modules/images/google.svg',
      description: 'Our Google scraping will allow you to insert a keyword and receive the top 100 URLs for that keyword on Google. The output will be a CSV containing the keyword, time scraped, and each URL and its position (1-100).',
      externallink:'/labs/input/google'
    },
    // {
    //   id: 2,
    //   title: 'Google Place',
    //   image:'https://scrapingrobot.com/api-modules/images/google-places.svg',
    //   description: 'Our Google Places scraping will allow you to insert a keyword and receive a list of locations/places for that keyword on Google.Extended report is available as a CSV-document that contains: Date Scraped | Query | Search location | Results total | Name | Website | Rating | Google Reviews | Prices Level | Type | Description | Located In | Address | Hours| Menu | Order | Phone | Top reviews | Photos | People Also Search',
    //   externallink:'/labs/input/google'
    // },
    {
      id: 3,
      title: 'URL to Image',
      image:'https://www.omgchrome.com/wp-content/uploads/2019/07/plain-screenshot-1.jpg',
      description: 'Turn your url to image',
      externallink:'/labs/url-to-image'
    },
    {
      id: 4,
      title: 'YouTube Video Rank',
      image:'https://tribulant.com/blog/wp-content/uploads/2020/09/YouTube-image.jpg',
      description: 'Get YouTube Video Rank',
      externallink:'/labs/youtube-video-rank'
    },
    {
      id: 5,
      title: 'Text to Emails',
      image:'https://creativeagencysecrets.com/wp-content/uploads/2013/12/Email.png',
      description: 'Email extraction from text',
      externallink:'/labs/text-to-emails'
    },
    {
      id: 6,
      title: 'HTML to Links',
      image:'https://www.quibustrainings.com/wp-content/uploads/11-SEO-Link-Building-Tips.jpg',
      description: 'Link extraction from Html content',
      externallink:'/labs/html-to-links'
    },
    {
      id: 7,
      title: 'Text to Phone',
      image:'https://i.pinimg.com/originals/ad/3b/21/ad3b213bc790807c25d8bb774dab3c35.jpg',
      description: 'Phone extraction from text content',
      externallink:'/labs/text-to-phone'
    },
    {
      id: 8,
      title: 'SMTP validation',
      image:'https://cdn.pixabay.com/photo/2017/03/17/06/47/email-2151046_960_720.png',
      description: 'SMTP Email Validation',
      externallink:'/labs/email-validation'
    },
    {
      id: 9,
      title: 'IP validation',
      image:'https://assets.getwildcard.com/system/images/imgs/000/000/447/original/cab_ip_02_1200x929.jpg',
      description: 'IP Validation',
      externallink:'/labs/ip-validation'
    },
    {
      id: 10,
      title: 'FaceBook posting',
      image:'https://seeklogo.com/images/F/facebook-icon-logo-03865A9BA2-seeklogo.com.png',
      description: 'Facebook Management',
      externallink:'/labs/fb-posts'
    },
    {
      id: 10,
      title: 'Instagram posting',
      image:'https://cdn.pixabay.com/photo/2016/09/17/07/03/instagram-1675670_960_720.png',
      description: 'Instagram Management',
      externallink:'/labs/insta-posts'
    },
  ])
  
  const handleNavigator = (routename:string) =>{
      history.push(routename)
  }
  return (
    <Grid container spacing={2}>
      {librarymodules.map((val) => {
        return (
          <Grid item sm={12} xs={12} md={4} lg={4} key={val.id} onClick={()=>handleNavigator(val.externallink)}>
            <ModuleLibraryItem
              id={val.id}
              title={val.title}
              image={val.image}
              description={val.description}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ModuleLibrary
