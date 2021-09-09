import React, { useEffect,useState } from 'react';

import {useParams} from 'react-router-dom'
import axios from 'axios';

const Pokemon = () => {

    const [pokemon, setPokemon] = useState({});
    const {poke_id} = useParams();

    useEffect(()=> {
        axios.get("https://pokeapi.co/api/v2/pokemon/" + poke_id)
        .then(res => setPokemon(res.data))
        .catch(err => alert("These are not the droids you are looking for"))
    }, [])

    return(
        <feildset>
            <legend>Pokemon.jsx</legend>
            <h2>Name {pokemon.name}</h2>
            <h2>PokeDex {pokemon.id}</h2>
        </feildset>
    )
}

export default Pokemon;