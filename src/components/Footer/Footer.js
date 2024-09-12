import React from 'react';
import './Footer.css';
import facebookLogo from '../../files/facebook_icon.png';
import instagramLogo from '../../files/instagram_icon.png';
import youtubeLogo from '../../files/youtube_icon.png';

const Footer = () => {
  return (
    <div className="outer-container">
    <div className="inner-container">
        <div>
            <img src={facebookLogo} alt="facebook logo"/>
            <img src={instagramLogo} alt="instagram logo"/>
            <img src={youtubeLogo} alt="youTube logo"/>
            {/* imported pictures from local directory*/}
         </div>
        < div className="footer-data">
                <ul>
                    <li>Audio Description</li>
                    <li>Investor Relations</li>
                    <li>Legal Notice</li>
                </ul>
                <ul>
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                </ul>
                <ul>
                    <li>Gift Cards</li>
                    <li>Terms of Use</li>
                    <li>Corporate Information</li>
                </ul>
                <ul>
                    <li>Media Center</li>
                    <li>Privacy</li>
                    <li>Contact Us</li>
                </ul>
        </div>
        <div className="service-code">
            <p>Service Code</p>
        </div>
        <div className="copy-write">
            &copy; 1997-2024 Netflix, Inc.
        </div>
    </div>
</div>
// rendering the footer jsx
  );
}
export default Footer;