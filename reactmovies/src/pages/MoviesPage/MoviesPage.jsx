import {movies} from "../../data/data.js";

export default function MoviesPage({user}) {

    const datamovies = movies.map(t => 
        <li>{t.title}</li>
        );


    return (
        <>
            <h1>Movies</h1>
            <ul>{datamovies}</ul>
        </>
    );
}