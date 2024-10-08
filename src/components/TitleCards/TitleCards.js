import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import Movie_Data from "../../files/MovieRendering/MovieRendering";
import { Link } from "react-router-dom";

const TitleCards = ({title, category }) =>{
    const [movieApiData, setMovieApiData] = useState([]);
    // set up a state facilitate a fetch
    const MoviesRef = useRef();
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTc4NDg4YTA4MTg2ZDUyMDcyMDA3Y2FjNWY1NWIwZSIsIm5iZiI6MTcyNTkyMTM0Ny4zNDIwMzYsInN1YiI6IjY2YzI3ZGVkZTUwNTA5NDZkMTFhOGZiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AgQZA-5J4Ck3ml-kE5sohJp8-1IGQaIEk3f8t30L-sk'
        }
      };
      //request type generated by the tmdb api
 
    const handleWheel = event =>{
        event.preventDefault();
        MoviesRef.current.scrollLeft += event.deltaY;
    }
    //prevents overflow to the left
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => setMovieApiData(response.results))
        .catch(err => console.error(err));
        MoviesRef.current.addEventListener('wheel', handleWheel);
    },[]);
// a fetch request is being sent, and [] makes sure to rerun the fetch request once the component mounts, and we 
// are using the setMovieApiData state to update the state in the useEffect instead of console.log-ing it to debugg
// the fetch request has been to have `` because to include dynamic values as to render it as props to every TitleCards
// components to passed diffrently

    return(
        <div className="titleCards">
            <h2>{title? title : "Popular on Netflix"}</h2>
            {/* conditionally rendering title from the db if unavailable it renders a static string */}
            <div className="movie-list" ref={MoviesRef}>
                {/* runs through the movieApiData and maps it to a new abj  of thumbnails and title*/}
                {movieApiData.map((movie, index)=>{
                    return(
                    <Link  to={`/player/${movie.id}`} className="Movie" key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500`+movie.backdrop_path} alt=""/>
                        <p src={movie.original_title} alt=""/>
                    </Link>
                    );
                })}
            </div>
        </div>
    );

}
export default TitleCards;