import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { Link } from "react-router-dom"

const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    return <>
    {
        isLoading
        ?
       

        <div className=" inline-flex relative overflow-hidden h-[300px] min-w-[220px] z-0 rounded-lg cursor-pointer border border-[rgb(99,99,99)] m-[12px] transition-transform hover:scale-125 hover:z-[1000] hover:shadow-2xl">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
              
        :


        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="relative inline-flex overflow-hidden h-[300px] min-w-[220px] z-0 rounded-lg cursor-pointer border border-[#636363] m-[12px] transition-transform hover:scale-125 hover:z-[1000] hover:shadow-2xl">
                <img className=" min-w-[220px] h-[300px]" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <div className="px-[14px] pt-[0px] pb-[7px] bottom-0 h-[290px] w-[220px] absolute flex flex-col justify-end bg-gradient-to-b from-[rgb(0,0,0,0)] to-[rgb(0,0,0,1)] opacity-0 hover:opacity-100 hover:transition-opacity">
                    <div className="font-black text-base mb-[8px] ">{movie?movie.original_title:""}</div>
                    <div className="text-xs mb-[4px]">
                    {movie?movie.release_date:""}
                    <span className="float-right">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="text-xs mb-[4px] italic">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
             
    }
    </>
}

export default Cards