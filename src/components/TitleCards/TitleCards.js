import React from 'react';
import "./TitleCards.css";
import Movie_Data from "../../files/MovieRendering/MovieRendering";

const TitleCards = () => {
  return (
    <div className="titleCards">
      <h2>{title? title : "Popular on Netflix"}</h2>
      <div className="movie-list" ref={MoviesRef}>
      {Movie_Data.map((movie, index)=>{
            return(
            <div className="Movie" key={index}>
                <img src={movie.image} alt=""/>
                <p src={movie.name} alt=""/>
            </div>
            );
        })}
    </div>
  </div>
  );
}

export default TitleCards;
