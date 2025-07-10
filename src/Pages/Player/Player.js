import React, { useEffect, useState } from 'react';
import backArrow from '../../files/back_arrow_icon.png';
import loading from '../../files/netflix_spinner.gif';
import { useNavigate, useParams } from 'react-router-dom';
import './Player.css';

const Player = () => {
  const [movieApiData, setMovieApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  });
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();
  const navBack = () =>{
    nav(-2)
  }
  const {id} = useParams();

  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTc4NDg4YTA4MTg2ZDUyMDcyMDA3Y2FjNWY1NWIwZSIsIm5iZiI6MTcyNTkyMTM0Ny4zNDIwMzYsInN1YiI6IjY2YzI3ZGVkZTUwNTA5NDZkMTFhOGZiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AgQZA-5J4Ck3ml-kE5sohJp8-1IGQaIEk3f8t30L-sk'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => {
      if(response.results && response.results.length > 0) {
        setMovieApiData(response.results[0]);
      }
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });
  },[id]);
  // fetch a movie details from tmdb

  if (loading) {
    return (
      <div className='player-page player-loading'>
        <img src={backArrow} alt='back arrow icon' onClick={navBack}/>
        <div className="player-spinner">
          <img src={loading} alt='Loading...'/>
        </div>
      </div>
    );
  }

  return (
    <div className='player-page'>
      <img src={backArrow} alt='back arrow icon' onClick={navBack}/>
      <iframe
        width='85%'
        height='85%'
        src={`https://www.youtube.com/embed/${movieApiData.key}`}
        title='Trailer'
        style={{border: 'none'}}
        allowFullScreen>
      </iframe>
      <div className='player-information'>
        <p>{movieApiData.published_at?.slice(0,10)}</p>
        <p>{movieApiData.name}</p>
        <p>{movieApiData.type}</p>
      </div>
    </div>
  )
}

export default Player;
