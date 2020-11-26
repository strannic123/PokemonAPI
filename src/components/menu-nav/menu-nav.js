import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Spinner from "../spinner";

import './menu-nav.css'

function MenuNav() {
    const [pokemon, setPokemon] = useState([]);
    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        getPokemons()
        return (() => setPokemon([]))
    }, [])


    async function getPokemons() {
        setLoaded(true)
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
                setPokemon(res.data.results);
                setLoaded(false);
    }

    if (loaded) {
        return <div>
            <Spinner/>
        </div>
    }


    return (
        <div className="col-md-4 col-lg-3 navbar-container bg-light">
            <p className="navbar-brand" >Navbar</p>
            <nav className="navbar navbar-expand-md navbar-light">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar">

                    <ul className="navbar-nav d-block">
                        {pokemon.map(item => (
                            <li key={item.name} className="nav-item">
                                <Link to={item.name}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    )


}

export default MenuNav;