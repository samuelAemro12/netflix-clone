import React from 'react';
import './Home.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <NavigationBar/>
    <Footer/>
    </div>
  );
}

export default Home;
