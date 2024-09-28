import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className="">
        <h1 className="text-3xl text-white py-4">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-custom">
          <div className="flex ">
            {movies.map((movie) => (
              <MovieCard poster_path={movie?.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
