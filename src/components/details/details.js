import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Spinner from "../spinner";

function Details({match: {params: {id}}}) {
    const [pokDetails, setPokDetails] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function  getPokDetails() {
            setIsLoading(true);
            const result = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
            console.log(result)
                    setPokDetails(result.data)
            setIsLoading(false);

        }
        getPokDetails();
    }, [id])

    if (isLoading || !pokDetails.sprites) {
        return <div><Spinner /></div>;
    }

    // useEffect(() => {
    //     async function getPokDetails() {
    //         const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //         return await result.json();
    //     }
    //     getPokDetails()
    //         .then(res => setPokDetails(res.data))
    // }, [id])




    console.log('вывод стейта',pokDetails)

    return (
        <div>
            <img src={pokDetails.sprites.front_default} alt={id}/>
            <img src={pokDetails.sprites.back_default}/>
            <img src={pokDetails.sprites.back_shiny}/>
            <img src={pokDetails.sprites.front_shiny}/>
        </div>
    );
}

export default Details;