import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import Movie_Data from "../../files/MovieRendering/MovieRendering";

const TitleCards = ({title, category }) =>{
    const [movieApiData, setMovieApiData] = useState([]);
    const MoviesRef = useRef();
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTc4NDg4YTA4MTg2ZDUyMDcyMDA3Y2FjNWY1NWIwZSIsIm5iZiI6MTcyNTkyMTM0Ny4zNDIwMzYsInN1YiI6IjY2YzI3ZGVkZTUwNTA5NDZkMTFhOGZiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AgQZA-5J4Ck3ml-kE5sohJp8-1IGQaIEk3f8t30L-sk'
        }
      };

        
    const handleWheel = event =>{
        event.preventDefault();
        MoviesRef.current.scrollLeft += event.deltaY;
    }
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => setMovieApiData(response.results))
        .catch(err => console.error(err));
        MoviesRef.current.addEventListener('wheel', handleWheel);
    },[]);

    return(
        <div className="titleCards">
            <h2>{title? title : "Popular on Netflix"}</h2>
            <div className="movie-list" ref={MoviesRef}>
                {movieApiData.map((movie, index)=>{
                    return(
                    <div className="Movie" key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500`+movie.backdrop_path} alt=""/>
                        <p src={movie.original_title} alt=""/>
                    </div>
                    );
                })}
            </div>
        </div>
    );

}
export default TitleCards;