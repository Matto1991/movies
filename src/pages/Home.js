import React, { useEffect, useState } from "react";
import { Filters } from "../components/Filters";
import Searchbar from "../components/Searchbar";
import { Movies } from "../containers/Movies";
import { filterUrl, popularMoviesUrl, searchUrl } from "../utils/constants";

export const Home = () => {
  const [moviesFiltered, setMoviesFiltered] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [rating, setRating] = useState();
  const [title, setTitle] = useState("");

  useEffect(() => {
    getMovies();
  }, [searchQuery, rating]);

  const getMovies = async () => {
    let moviesUrl = "";

    if (searchQuery.length > 0) {
      moviesUrl = `${searchUrl}&query=${searchQuery}&language=en-US&page=1`;
      setTitle("Search result:");
    } else if (rating) {
      let gte = rating / 2,
        lte = rating;

      if (rating === 2) gte = 0;

      moviesUrl = `${filterUrl}&vote_average.gte=${gte}&vote_average.lte=${lte}&language=en-US&page=1`;
      setTitle("Rated:");
    } else {
      moviesUrl = popularMoviesUrl;
      setTitle("Popular:");
    }

    const data = await fetch(moviesUrl);
    const movies = await data.json();
    setMoviesFiltered(movies.results);
  };

  return (
    <div className="App">
      <div className="container my-5 ">
        <div className="row">
          <div className="col-lg-3 col-12"></div>
          <div className="col-lg-9 col-12">
            <Searchbar setQuery={setSearchQuery} />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-12 mb-5">
            <Filters actualRating={rating} setFilterRating={setRating} />
          </div>

          <div className="col-lg-9 col-12">
            <h2>{title}</h2>
            <Movies page="/" movies={moviesFiltered} />
          </div>
        </div>
      </div>
    </div>
  );
};
