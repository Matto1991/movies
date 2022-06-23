import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiKey } from "../utils/constants";
import { convertDurationToHoursMinutes } from "../utils/utils";

export const MovieDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [movieDetail, setMovieDetail] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    getMoviesDetail();
  }, [id]);

  const getMoviesDetail = async () => {
    try {
      setLoading(true);
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
      );

      if (!data.ok) {
        setLoading(false);
        setError(true);
      } else {
        const movieData = await data.json();
        setLoading(false);
        setMovieDetail(movieData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) return <p>Loading...</p>;
  if (error) {
    return (
      <>
        <div className="d-flex justify-content-start mx-2 ">
          <Link to="/" className="link-dark">
            Go back
          </Link>
        </div>

        <div className="d-flex justify-content-around align-items-center my-5">
          <p>Movie not found</p>
        </div>
      </>
    );
  }
  if (!loading && movieDetail) {
    return (
      <div className="card mb-3 ">
        <div className="card-header bg-primary">
          <Link to="/" className="link-light">
            Go back
          </Link>
        </div>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={
                "https://image.tmdb.org/t/p/w440_and_h660_face" +
                movieDetail.backdrop_path
              }
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title fw-bold">
                {movieDetail.original_title}
              </h2>
              <span className=" text-muted fs-5">
                Release date: {movieDetail.release_date}
              </span>
              <div className="d-flex justify-content-start">
                <span className=" fw-bold fs-5">
                  Duration: {convertDurationToHoursMinutes(movieDetail.runtime)}
                </span>
              </div>
              <h5>Overview:</h5>
              <p className="card-text">{movieDetail.overview}</p>
              <div className="d-flex justify-content-around">
                {movieDetail.genres.map((genre) => {
                  return <p key={genre.id}>{genre.name}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
