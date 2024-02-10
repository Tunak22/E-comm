import React from 'react'
import "./Contacts.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Contacts = () => {
  return (
    <div className='contacts'>
        <div className="wrapper">
            <span>BE IN TOUCH WITH US:</span>
            <div className="mail">
                <input type="text" placeholder='enter your email..' />
                <button>JOIN US!</button>
            </div>
            <div className="icons">
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
            <PinterestIcon/>
            <LinkedInIcon/>
            </div>
        </div>
    </div>
  )
}

export default Contacts