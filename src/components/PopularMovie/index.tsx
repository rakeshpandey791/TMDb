// @ts-nocheck
import React from "react";
import { PopularMovieStyledDiv } from "./style";
import { Movie } from "../../store/types";

interface IMovies {
  movies: Array<Movie>;
}

const PopularMovie: React.FC<IMovies> = ({ movies }) => {
  console.log("movies", movies);
  return (
    <PopularMovieStyledDiv>
      {movies?.map((item) => (
        <div className="movie-item">
          <div className="movie-item-container">
            <img
              className="img"
              src={`https://image.tmdb.org/t/p/w185/${item?.poster_path}`}
            />
            <div className="movie-details">
              <div className="title">{item?.title}</div>
              <div className="date">{item?.release_date}</div>
              <div className="description">{item?.overview}</div>
            </div>
          </div>
        </div>
      ))}
    </PopularMovieStyledDiv>
  );
};

export default PopularMovie;
