import React from 'react'
import { useSelector } from 'react-redux';


export default function Details(){

    const movie = useSelector(state => state.update.movie)

    return(
        <div className = "movieContainer">
            <div className = "movie">
             <div className = "Poster">
             <h3>{movie.Title} {movie.Year}</h3>
             <img src = {movie.Poster}/>
             </div>

             <div className = "Details">
                 <p>                   
                     <h5>General Information</h5>
                     <b>Release Date:</b> {movie.Released} &nbsp; <b>Runtime:</b> {movie.Runtime}
                     &nbsp; <b>Genre:</b> {movie.Genre} &nbsp; <b>Plot:</b> {movie.Plot}
                     &nbsp; <b>Director:</b> {movie.Director} &nbsp; <b>Writer:</b> {movie.Writer}
                     &nbsp; <b>Actors:</b> {movie.Actors} &nbsp; <b>Production :{movie.Production}</b>
                     &nbsp; <b>Language:</b> {movie.Language}
                     &nbsp; <b>Country:</b> {movie.Country}   &nbsp; <b>BoxOffice:</b> {movie.BoxOffice}
                 </p>

                 <p>
                     <h5>Ratings and Awards</h5>
                     <b>Awards:</b> {movie.Awards}  &nbsp; <b>imdbRating:</b> {movie.imdbRating}
                      &nbsp; <b>imdbVotes:</b> {movie.imdbRating}    
                 </p>                 
             </div>             
        </div>
        </div>
        
    )
}