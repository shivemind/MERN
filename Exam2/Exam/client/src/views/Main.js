import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PirateList from '../components/PirateList';
import { Link } from "react-router-dom";
    
const Main = (props) => {
    const [pirate, setPirate] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8014/api/pirate')
            .then(res=>{
                console.log(res.data.data)
                setPirate(res.data);
                
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    
    const removeFromDom = pirateId => {
        setPirate(pirate.filter(pirate => pirate._id != pirateId));
    }
    
    return (
        <div>
            <Link to={"/pirate/create"}>
                    Create Pirate
                </Link> 
            <hr/>
            {loaded && <PirateList pirate={pirate} removeFromDom={removeFromDom}/>}
        </div>
    );
}
    
export default Main;