import React from "react";
import Movie from "../components/Movie";

export const Movies = ({ movies }) => {
  if (movies.length === 0) {
    return <p>Movies not found</p>;
  }

  return (
    <div className="row">
      {movies.map((movie) => {
        return (
          <div
            className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2"
            key={movie.id}
          >
            <Movie movie={movie} />
          </div>
        );
      })}
    </div>
  );
};
