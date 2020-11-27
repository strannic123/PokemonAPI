import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './details.css'
import { Link } from "react-router-dom";

import Spinner from "../spinner";

function Details({match: {params: {id}}}) {
    const [pokDetails, setPokDetails] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function  getPokDetails() {
            setIsLoading(true);
            const result = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
                    setPokDetails(result.data)
            setIsLoading(false);

        }
        getPokDetails();
    }, [id])

    if (isLoading || !pokDetails.sprites) {
        return <div><Spinner /></div>;
    }


    return (

        <div className="container">
            <div className="card">
                <h1>Name: {id}</h1>
                <div className="img-container">
                    <img src={pokDetails.sprites.front_default} alt={pokDetails.name} />
                    <img src={pokDetails.sprites.back_default} alt={pokDetails.name} />
                </div>
                <p>type: {pokDetails.types[0].type.name}</p>
                <p>weight: {pokDetails.weight}</p>
                <p>height: {pokDetails.height}</p>
                <p>ability: {pokDetails.abilities[0].ability.name}</p>
                <Link to="/">Return to List View</Link>
            </div>
        </div>

  )

}

export default Details;