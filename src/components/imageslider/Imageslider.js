
import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { Carousel } from "react-responsive-carousel";

const Imageslider = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e3dafb33dc59e9998e6349775beab18d&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <div className="flex justify-center gap-x-2">
        {popularMovies.map((movie) => (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/movie/${movie.id}`}
            key={movie.id}
          >
            <div className="h-[59px] w-[60px] border-2 border-yellow-100">
              <img className="h-[55px] w-[60px]"
                src={`https://image.tmdb.org/t/p/original${
                  movie && movie.backdrop_path
                }`}
              />
            </div>
            {/* <div className="posterImage_overlay">
              <div className="posterImage_title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="posterImage_runtime">
                {movie ? movie.release_date : ""}
                <span className="posterImage_rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />{" "}
                </span>
              </div>
              <div className="posterImage_description">
                {movie ? movie.overview : ""}
              </div>
            </div> */}
           </Link>
        ))}
    </div>
  );
};

export default Imageslider

