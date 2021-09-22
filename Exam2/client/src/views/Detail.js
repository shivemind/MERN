import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
    
const Detail = (props) => {
    const [pet, setPet] = useState({})
    const { id } = useParams();
    const { removeFromDom } = props;

    const deletePet = (petId) => {
        axios.delete('http://localhost:8015/api/pet/' + petId)
            .then(res => {
                removeFromDom(petId)
            })
            .catch(err => console.error(err));
    }
    
    useEffect(() => {
        axios.get('http://localhost:8015/api/pet/' +id)
        
            .then(res => {
                setPet(res.data)
                console.log(res.data)
            })
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <h1>Details About: {pet.petName}</h1>
            <p>Pet Name: {pet.petName}</p>
            <p>Pet Type: {pet.petType}</p>
            <p>Pet Description: {pet.petDescription}</p>
            <p>Skills: {pet.skillOne}  {pet.skillTwo}  {pet.skillThree}</p>
            
            
                <Link to={"/pet/"}>
                    Home
                </Link> 
                <Link to={"/pet/"}><button onClick={(e)=>{deletePet(pet._id)}}>
                        Adopt {pet.petName}
                    </button></Link>
        </div>
    )
}
    
export default Detail;