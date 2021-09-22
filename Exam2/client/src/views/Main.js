import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PetList from '../components/PetList';
import { Link } from "react-router-dom";
    
const Main = (props) => {
    const [pet, setPet] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8015/api/pet')
            .then(res=>{
                console.log(res.data.data)
                setPet(res.data);
                
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    
    const removeFromDom = petId => {
        setPet(pet.filter(pet => pet._id != petId));
    }
    
    return (
        <div>
            
            <Link to={"/pet/create"}>
                    Add Pet to Shelter
                </Link> 
                
            <hr/>
            {loaded && <PetList pet={pet} removeFromDom={removeFromDom}/>}
        <h1>These Pets are looking for a good home</h1>
        </div>
    );
}
    
export default Main;