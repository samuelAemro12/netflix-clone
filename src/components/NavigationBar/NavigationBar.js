import React, { useEffect, useRef } from "react";
import './NavigationBar.css';
import netflixLogo from '../../files/netflixLogo.png';
import notificationIcon from '../../files/icons8-notification-48.png';
import profileIcon from '../../files/profile_img.png';
import searchIcon from '../../files/searchIconnetflix.png';

const NavigationBar = () => {
    const navRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) { // Check if navRef.current is defined
              if (window.scrollY >= 90) {
                navRef.current.classList.add('nav-dark');
              } else {
                navRef.current.classList.remove('nav-dark');
              }
            }
          };
      
        window.addEventListener('scroll', handleScroll);
      
        // Cleanup function
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [navRef]); 
      
    return(
        <div className="navbar">
            <div className="left-side">
                <img src={netflixLogo} alt="netflix-logo" className="netflix-logo"/>
                <ul>
                    <li>Home</li>
                    <li>Tv Shows</li>
                    <li>Movies</li>
                    <li>New & Popualar</li>
                    <li>My List</li>
                    <li>Browse by Language</li>
                </ul>
            </div>
            <div className="right-side">
                <img src={searchIcon} alt="icon" className="search-icon"/>
                <img src={notificationIcon} alt="notification icon" className="notification-icon"/>
                <div className="navbar-profile">
                <img src={profileIcon} alt="profile logo" className="profile-icon"/>
                </div>
            </div>
        </div>
    );
}
export default NavigationBar;