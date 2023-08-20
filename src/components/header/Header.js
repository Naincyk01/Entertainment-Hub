import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex m-2 p-2">
      <div className=" flex justify-between items-center w-11/12">
        <div>
          <Link to="/">
            <img
              className="w-18 h-12 cursor-pointer hover:scale-95"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            />
          </Link>
        </div>
        <div className="flex w-1/2 justify-between">
          <div className="font-bold text-2xl hover:text-slate-300 hover:scale-95">
            <Link to="/movies/popular" style={{ textDecoration: "none" }}>
              <span className="cursor pointer">Popular</span>
            </Link>
          </div>
          <div className="font-bold text-2xl  hover:text-slate-300 hover:scale-95">
            <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
              <span className="cursor-pointer">Top Rated</span>
            </Link>
          </div>
          <div className="font-bold text-2xl hover:text-slate-300 hover:scale-95 ">
            <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
              <span className="cursor-pointer">Upcoming</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
