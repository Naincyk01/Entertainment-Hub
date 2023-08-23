import React, { useEffect, useState } from "react";
import Cards from "../card/card";
import "./movieList.css";
import { useParams } from "react-router-dom";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);


  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=e3dafb33dc59e9998e6349775beab18d&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <div
      className={`flex flex-col items-center justify-center gap-y-8`}
    >
      {/* <h2 className="list_title">{(type?type:"POPULAR").toUpperCase()}</h2> */}
      <div className="font-bold capitalize text-3xl">{(type?type:"POPULAR")}</div>
      <div className=" gap-x-6 gap-y-2 flex flex-wrap justify-center">
        {movieList.map((movie) => (
          <Cards movie={movie}  key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
