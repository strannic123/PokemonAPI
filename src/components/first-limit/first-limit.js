import React, {useState, useEffect} from 'react';

import './first-limit.css'
import axios from "axios";
import Spinner from "../spinner";
import {Link} from "react-router-dom";

import MenuNav from "../menu-nav";

function FirstLimit() {
    const [limitData, setLimitData] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getLimitPokemon()
    }, [])

    async function getLimitPokemon() {
        setLoading(true)
        const res = await axios('https://pokeapi.co/api/v2/pokemon/')
        setLimitData(res.data.results)
        setLoading(false)
    }

    if (loading) {
        return <Spinner/>
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <MenuNav/>

                <div className="col-md-8 col-lg-9 content-container">
                     <div className="container">
                         <h1 className='text-center mt-3 mb-3'>Pokemons </h1>
                             <ul className="list">
                                 {limitData.map((item, index) => (
                 <li key={item.name} className="list-item">
                     <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={item.name}/>
                     <Link to={item.name}>{item.name}</Link>
                    </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FirstLimit;

