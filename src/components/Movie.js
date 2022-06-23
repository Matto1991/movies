import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Movie = ({ movie }) => {
  return (
    <div className="card h-100">
      <img
        src={
          "https://image.tmdb.org/t/p/w440_and_h660_face" + movie.backdrop_path
        }
        alt={movie.path}
        className="card-img-top"
      />
      <div className="card-footer bg-transparent border-success">
        <strong>{movie.title}</strong>
        <div className="text-muted">{movie.release_date}</div>

        <Link to={`/${movie.id}`}>More Info</Link>
      </div>
    </div>
  );
};
export default Movie;
