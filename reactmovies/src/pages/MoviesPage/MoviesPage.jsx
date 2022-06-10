import {movies} from "../../data/data.js";
import MovieCard from "../../components/MovieCard";

export default function MoviesPage({user}) {

    const datamovies = movies.map(t => 
        <li><MovieCard movie={t}/></li>
        );


    return (
        <>
            <h1>Movies</h1>
            <ul>{datamovies}</ul>
        </>
    );
}