import React, { useEffect, useRef } from "react";
import './NavigationBar.css';
import netflixLogo from '../../files/netflixLogo.png';
import notificationIcon from '../../files/icons8-notification-48.png';
import profileIcon from '../../files/profile_img.png';
import searchIcon from '../../files/icons8-search-50.png';

const NavigationBar = () => {
    const navRef = useRef();
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.screenY>= 80){
                navRef.current.classList.add('nav-dark');
            } else{
                navRef.current.classList.remove('nav-dark');
            }
        })
    },[])
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
                <image src={searchIcon} alt="icon" className="search-icon"/>
                <p>children</p>
                <img src={notificationIcon} alt="notification icon" className="notification-icon"/>
                <div className="navbar-profile">
                <img src={profileIcon} alt="profile logo" className="profile-icon"/>
                </div>
                <div className="drop-down">
                    <p>Sign Out</p>
                </div>
            </div>
        </div>
    );
}
export default NavigationBar;