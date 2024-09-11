import React, { useEffect, useState } from 'react';
import backArrow from '../../files/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';
import './Player.css';

const Player = () => {
  const [movieApiData, setMovieApiData] = useState({
    name:"",
    key:"",
    publilshed_at:"",
    typeof:""
  });
  const nav = useNavigate();
  const navBack = () =>{
    nav(-2)
  }
  const {id} = useParams();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTc4NDg4YTA4MTg2ZDUyMDcyMDA3Y2FjNWY1NWIwZSIsIm5iZiI6MTcyNTkyMTM0Ny4zNDIwMzYsInN1YiI6IjY2YzI3ZGVkZTUwNTA5NDZkMTFhOGZiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AgQZA-5J4Ck3ml-kE5sohJp8-1IGQaIEk3f8t30L-sk'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setMovieApiData(response.results[0]))
    .catch(err => console.error(err));
  },[]);
 
  return (
    <div className='player-page'>
      <img src={backArrow} alt='back arrow icon' onClick={navBack}/>
      <iframe width='85%' height='85%' src ={`https://www.youtube.com/embed/fIOph60LEBA${movieApiData.key}`} title='Trailer'
      frameBorder='0' allowFullScreen></iframe>
      <div className='player-information'>
        <p>{movieApiData.publilshed_at.slice(0,10)}</p>
        <p>{movieApiData.name}</p>
        <p>{movieApiData.typeof}</p>
      </div>
    </div>
  )
}

export default Player;
