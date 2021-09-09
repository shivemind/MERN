import React, { useEffect,useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';

const People = () => {

    const history = useHistory()

    const [people, setPeople] = useState({});
    const {people_id} = useParams();

    useEffect(()=> {
        axios.get("https://swapi.dev/api/people/" + people_id)
        .then(res => setPeople(res.data))
        .catch(err => alert("These are not the droids you are looking for"))
    }, [people_id])

    return(
        <feildset>
            <legend>People.jsx</legend>
            <h2>Name {people.name}</h2>
            <h2>Height {people.height}</h2>
            <h2>mass {people.mass}</h2>
            <h2>hair {people.hair_color}</h2>
            <h2>skin {people.skin_color}</h2>
            
        </feildset>
    )
}

export default People;