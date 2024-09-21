import React from 'react';
import './Home.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import HomeImageBanner from '../../files/image-banner(2).jpg';
import ImageBannerTitle from '../../files/image-banner-title(1).jpg'
import playImage from '../../files/play_icon.png';
import InfoImage from '../../files/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';

const Home = () => {
  return (
    <div className='home'>
      <NavigationBar/>
      <div className='banner-home'>
                <img src={HomeImageBanner} alt='' className='banner-image'/>
                <div className='banner-caption'>
                    <img src={ImageBannerTitle} alt='' className='caption-image'/>
                    <p>A teenage girl falls for a vampire, uncovering a dark secret world of supernatural
                      beings and a love triangle with his brother. Filled with romance, danger, and
                      supernatural thrills.
                    </p>
                    <div className='home-buttons'>
                        <button className='home-button'><img src={playImage} alt=''/>Play</button>
                        <button className='home-button dark-button'><img src={InfoImage} alt=''/>More Info</button>
                    </div>
                    <TitleCards/>
                </div>
          </div>
          <div className='more-movie-options'>
                <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
                <TitleCards title={"Only on Netflix"} category={"popular"}/>
                <TitleCards title={"Upcoming"} category={"upcoming"}/>
                <TitleCards title={"Top Pics for you"} category={"now_playing"}/>
          </div>
      <Footer/>
    </div>
  );
}

export default Home;
