
export default function MovieCard({movie}) {

    const cast = movie.cast.map(t => 
        <li>{t}</li>
    );

    return (
        <>
        <h1>{movie.title}</h1>
        <ul>{cast}</ul>
        </>


    )
}