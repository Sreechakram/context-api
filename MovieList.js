import React,{useState,useContext} from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";
const MovieList=()=>{
    const [movies,setMovies]=useContext(MovieContext);
    return(
        <div>
            <br/>
            <br/>
            <br/> 
            <br/>
            
            {movies.map(movie=>(
                <Movie name={movie.name}
                 price={movie.price}
                 key={movie.id}/>
               
            ))}

        </div>
    );
}
export default MovieList;