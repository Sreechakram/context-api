import React,{useState,createContext} from "react";

export const MovieContext=createContext();


export const MovieProvider=(props)=>{
    const[movies,setMovies]=useState([
        {
            name:"Harry Potter",
            price:"$20",
            id:23445
        },
        {
            name:"game of thrones",
            price:"$35",
            id:26387634
        },
        {
            name:"inception",
            price:"$19",
            id:277863
        }
    ])
    return(
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}