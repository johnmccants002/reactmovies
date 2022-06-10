import {movies, getActors} from "../../data/data.js";
import {useState} from 'react';
import ActorCard from "../../components/ActorCard"
import { set } from "mongoose";


export default function ActorsPage() {

    const [actors, setActors] = useState(getActors);

    return (
        <div className="actors">
        <h1>Actors</h1>
        
        {getActors().map(actor => <ActorCard actor={actor}/>)}
         
        </div>

    );
}