import MovieDetailPage from "../pages/MoviesDetailPage/MovieDetailPage";
import {useState} from 'react';
export default function MovieCard({movie}) {

    const cast = movie.cast.map(t => 
        <li>{t}</li>
    );

    const [showDetails, setShowDetails] = useState(
        false
    );


    function toggleShowDetails() {
        if (showDetails == false) {
            setShowDetails(true);
        } else {
            setShowDetails(false);
        }
        
    }

    return (
        <div>
        { showDetails ? 
            <>
            <MovieDetailPage movie={movie}/> 
            <button onClick={toggleShowDetails}>Hide Details</button>
            </>:
            <div className="movie-card">
            <img className="poster"
            src={movie.poster_path}
            alt="new"
            />
            <div>
            <button onClick={toggleShowDetails}>{movie.title}</button>
            </div>
            </div>
        }

        </div>


    )
}