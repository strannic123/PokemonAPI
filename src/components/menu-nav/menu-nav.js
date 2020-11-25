import React, { useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Spinner from "../spinner";

function MenuNav() {
    const [pokemon, setPokemon] = useState([]);
    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        getPokemons()
    }, [])



    const  getPokemons =() => {
        setLoaded(true)
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(res => {
                // console.log(res.data);
                setPokemon(res.data.results)})
                setLoaded(false)
    }

    if(loaded){
        return <div>
            <Spinner />
        </div>
    }


    return <div className='menu-nav'>
            <ul>
                {pokemon.map(item => {
                    return <li
                        key={item.name}
                        >
                        <Link to={item.name}>{item.name}</Link>

                    </li>
                })}

            </ul>
    </div>
}

export default MenuNav;