import React,{useEffect,useState} from "react"
import "./movieDetail.css"
import { useParams } from "react-router-dom"

const Movie = ()=>{
    const [currentMovieDetail,setMovie] =useState()
    const {id}=useParams()
    
    useEffect(()=>{
        getData()
        window.scrollTo(0,0)
    },[])
    
    const getData=()=>{
        fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=e3dafb33dc59e9998e6349775beab18d&language=en-US`
            )
            .then((res) => res.json())
            .then((data) => console.log(data));
        }
        return(
            <h1>Movie detail page</h1>
        )
    }
    export default Movie