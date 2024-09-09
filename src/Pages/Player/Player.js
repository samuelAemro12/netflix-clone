import React from 'react';
import backArrow from '../../files/back_arrow_icon.png';

const Player = () => {
  return (
    <div className='player-page'>
      <img src={backArrow} alt='back arrow icon'/>
      <iframe width='85%' height='85%' src='{}https://www.youtube.com/embed/...' title='Trailer'
      frameBorder='0' allowFullScreen></iframe>
      <div className='player-information'>
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  )
}

export default Player;
