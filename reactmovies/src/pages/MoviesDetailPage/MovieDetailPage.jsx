import {useState} from 'react';

export default function MovieDetailPage({movie}) {

    const cast = movie.cast.map(t => 
        <li>{t}</li>
    );
    return (
        <>
        <h1>{movie.title}</h1>
        <h3>Release Date: {movie.releaseDate}</h3>
        <ul><strong>Cast: </strong> {cast}</ul>
        </>
        
    
    )

}