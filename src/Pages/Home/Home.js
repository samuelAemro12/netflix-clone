import React from 'react';
import './Home.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import HomeImageBanner from '../../files/image-banner.jpg';
import ImageBannerTitle from '../../files/image-banner-title.png';
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
                    <p>Discovering his ties to a secret ancient order, a young man living 
                        in modern istanbul embarks on a quest to save the city from an 
                        immortal enemy.
                    </p>
                    <div className='home-buttons'>
                        <button className='home-button'><img src={playImage} alt=''/>Play</button>
                        <button className='home-button dark-button'><img src={InfoImage} alt=''/>More Info</button>
                    </div>
                    <TitleCards/>
                </div>
          </div>
          <div className='more-movie-options'>
                <TitleCards title={"Blockbuster Movies"}/>
                <TitleCards title={"Only on Netflix"}/>
                <TitleCards title={"Upcoming"}/>
                <TitleCards title={"Top Pics for you"}/>
          </div>
      <Footer/>
    </div>
  );
}

export default Home;
