import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
    
const Detail = (props) => {
    const [pirate, setPirate] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8014/api/pirate/' +id)
        
            .then(res => {
                setPirate(res.data)
                console.log(res.data)
            })
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <img src={pirate.imageUrl} alt="BigCo Inc. logo"/>
            <p>Pirate Name: {pirate.pirateName}</p>
            <p>Chest Number: {pirate.numberOfChests}</p>
            <p>Catch Phrase: {pirate.pirateCatchPhrase}</p>
            <p>Crew Position: {pirate.crewPosition}</p>
            <p>Peg Leg: {pirate.pegLeg}</p>
            <p>Eye Patch: {pirate.eyePatch}</p>
            <p>Hook Hand: {pirate.hookHand}</p>
                <Link to={"/pirate/"}>
                    Home
                </Link> 
        </div>
    )
}
    
export default Detail;