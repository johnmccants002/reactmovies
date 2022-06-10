import {useState} from 'react';

export default function MovieDetailPage({movie}) {
    

    const cast = movie.cast.map(t => 
        <li>{t}</li>
    );
    return (
        <>
        <h2>{movie.title}</h2>
        <h5>Release Date: {movie.release_date}</h5>
        <ul><strong>Cast: </strong> {cast}</ul>
        </>
        
    
    )

}