import React, { useEffect,useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';

const Planets = () => {

    const history = useHistory()

    const [planets, setPlanets] = useState({});
    const {planet_id} = useParams();

    useEffect(()=> {
        axios.get("https://swapi.dev/api/planets/" + planet_id)
        .then(res => setPlanets(res.data))
        .catch(err => alert("These are not the ploids you are looking for"))
    }, [planet_id])

    return(
        <feildset>
            <legend>Planets.jsx</legend>
            <h2>Name: {planets.name}</h2>
            <h2>Climate: {planets.climate}</h2>
            <h2>Terrain: {planets.terrain}</h2>
            <h2>Surface Water: {planets.surface_water}</h2>
            <h2>population: {planets.population}</h2>
            
        </feildset>
    )
}

export default Planets;