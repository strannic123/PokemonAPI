import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Spinner from "../spinner";

import './menu-nav.css'

function MenuNav() {
    const [pokemon, setPokemon] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [search, setSearch] = useState('');
    const [filterPokemon, setFilterPokemon] = useState([])


    useEffect(() => {
        getPokemons()
        return (() => setPokemon([]))
    }, [])

    useEffect(() => {
        setFilterPokemon(
        pokemon.filter(item => {
            return item.name.toLowerCase().includes(search.toLowerCase())
        }))
    }, [search, pokemon])


    async function getPokemons() {
        setLoaded(true)
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
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
            <input className="form-control mr-sm-2 mb-3 mt-3"
                   type="search"
                   placeholder="Search Pokemon"
                   aria-label="Search"
                   onChange={e => setSearch(e.target.value)}/>
            <nav className="navbar navbar-expand-md navbar-light">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav d-block">
                        {filterPokemon.map(item => (
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