import {movies} from "../../data/data.js";
import MovieCard from "../../components/MovieCard";

export default function MoviesPage({user}) {

    const datamovies = movies.map(t => 
        <div><MovieCard movie={t}/></div>
        );


    return (
        <>
        <br/>
        <br/>
        <br/>
            <div>{datamovies}</div>
        </>
    );
}