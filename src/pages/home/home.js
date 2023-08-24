import React from "react";
import { useState,useEffect } from "react";
//import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";
import Imageslider from "../../components/imageslider/Imageslider";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e3dafb33dc59e9998e6349775beab18d&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);


  return (
      <div className="flex flex-col gap-y-16">
        
          {popularMovies.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
              key={movie.id}

            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                />
              </div>
              <div className="posterImage_overlay">
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
              </div>
            </Link>
          ))}
        <Imageslider/>
        <MovieList/>
        
      </div>
  );
};

export default Home;


// const Home = () => {
//   return(
//     <div className="flex flex-col gap-y-">
//       <Imageslider/>
//       <MovieList/>
//     </div>
//   )
// }

// export default Home

// const Home = () => {
//   const [popularMovies, setPopularMovies] = useState([]);
//   useEffect(() => {
//     fetch(
//       "https://api.themoviedb.org/3/movie/popular?api_key=e3dafb33dc59e9998e6349775beab18d&language=en-US"
//     )
//       .then((res) => res.json())
//       .then((data) => setPopularMovies(data.results));
//   }, []);


//   return (
//       <div className="flex flex-col gap-y-16">
//         <Carousel
//           showThumbs={false}
//           autoPlay={true}
//           transitionTime={1}
//           infiniteLoop={true}
//           showStatus={false}
//         >
//           {popularMovies.map((movie) => (
//             <Link
//               style={{ textDecoration: "none", color: "white" }}
//               to={`/movie/${movie.id}`}
//               key={movie.id}

//             >
//               <div className="posterImage">
//                 <img
//                   src={`https://image.tmdb.org/t/p/original${
//                     movie && movie.backdrop_path
//                   }`}
//                 />
//               </div>
//               <div className="posterImage_overlay">
//                 <div className="posterImage_title">
//                   {movie ? movie.original_title : ""}
//                 </div>
//                 <div className="posterImage_runtime">
//                   {movie ? movie.release_date : ""}
//                   <span className="posterImage_rating">
//                     {movie ? movie.vote_average : ""}
//                     <i className="fas fa-star" />{" "}
//                   </span>
//                 </div>
//                 <div className="posterImage_description">
//                   {movie ? movie.overview : ""}
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </Carousel>
//         <MovieList/>
        
//       </div>
//   );
// };

// export default Home;
