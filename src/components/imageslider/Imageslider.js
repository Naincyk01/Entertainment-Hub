// import React,{ useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// //  import Btnslider from "./Btnslider";
// import { BsFillArrowLeftSquareFill } from "react-icons/bs";
// import { BsFillArrowRightSquareFill } from "react-icons/bs";


// const Imageslider = () => {
//   const [popularMovies, setPopularMovies] = useState([]);
  
//   useEffect(() => {
//     fetch(
//       "https://api.themoviedb.org/3/movie/popular?api_key=e3dafb33dc59e9998e6349775beab18d&language=en-US"
//     )
//       .then((res) => res.json())
//       .then((data) => setPopularMovies(data.results));
//   }, []);

//   const [slideIndex,setSlideIndex] = useState(0);


//   const nextSlide=() =>{
//       setSlideIndex(slideIndex===1)
//   }
//   const preSlide=() =>{
//   setSlideIndex(slideIndex-1)
//   }

//   return (
//   <>
//       <BsFillArrowLeftSquareFill size={35} onClick={preSlide}/>
//     <div className="flex gap-x-2 overflow-hidden" >
//         {
//         popularMovies.map((movie ) => (
//           <Link
//             style={{ textDecoration: "none", color: "white" }}
//             to={`/movie/${movie.id}`}
//             key={movie.id}
//           >
            
//             <div className=" border-4 border-green-400">
//             <div className="h-[600px] w-[1255px] border-2 border-yellow-100">
//               <img className="w-full h-full"
//                 src={`https://image.tmdb.org/t/p/original${
//                   movie && movie.backdrop_path
//                 }`}
//                 />
//             </div>
//              <div className="posterImage_overlay">
//               <div className="posterImage_title">
//                 {movie ? movie.original_title : ""}
//               </div>
//               <div className="posterImage_runtime">
//                 {movie ? movie.release_date : ""}
//                 <span className="posterImage_rating">
//                   {movie ? movie.vote_average : ""}
//                   <i className="fas fa-star" />{" "}
//                 </span>
//               </div>
//               <div className="posterImage_description">
//                 {movie ? movie.overview : ""}
//               </div>
//             </div> 
//           </div>
//            </Link>
//         ))} 
//     </div>
//     <BsFillArrowRightSquareFill size={35} onClick={nextSlide}/>
//      {/* <Btnslider moveSlide={nextSlide} direction={"next"}/>
//     <Btnslider moveSlide={preSlide} direction={"prev"}/>  */}
//         </> 
 
       
//   );
// };

// export default Imageslider

