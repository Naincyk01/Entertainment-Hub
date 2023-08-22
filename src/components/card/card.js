import React, { useEffect, useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import Shimmer from "../shimmer/Shimmer";

const Cards = ({ movie}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState();


  console.log(image);

  async function imageFetch() {
    const data = await fetch(
      "https:/image.tmdb.org/t/p/original" + movie.poster_path
    );

    setTimeout(()=> {
      setImage(data.url);
        setIsLoading(false)

    },3000)
  }

  useEffect(() => {
    imageFetch()
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 3000);

    // setTimeout(() => {
    //   // setVisibility('visible')
    //   console.log('apple')
    // }, 2000);

    // return () => {
    // }

  }, []);

  return (
    <>
      {isLoading ? (
        <Shimmer />
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="bg-gray-700 relative  overflow-hidden h-[22rem] w-60 z-0 rounded-lg cursor-pointer border border-[#636363] m-[12px] transition-transform hover:scale-125 hover:z-[1000] hover:shadow-2xl">
            <img
              className={` w-60 h-[22rem]  `}
              // src={`https://image.tmdb.org/t/p/original${
              //   movie ? movie.poster_path : ""
              // }`}
              src={image}
            />
            <div className="px-[14px] pt-[0px] pb-[7px] bottom-0 h-[22rem] w-60 absolute flex flex-col justify-end bg-gradient-to-b from-[rgb(0,0,0,0)] to-[rgb(0,0,0,1)] opacity-0 hover:opacity-100 hover:transition-opacity">
              <div className="font-black text-base mb-[8px] ">
                {movie ? movie.original_title : ""}
              </div>
              <div className="text-xs mb-[4px]">
                {movie ? movie.release_date : ""}
                <span className="float-right">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="text-xs mb-[4px] italic">
                {movie ? movie.overview.slice(0, 118) + "..." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Cards;
