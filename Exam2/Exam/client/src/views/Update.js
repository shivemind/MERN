import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
    
const Update = (props) => {
    const [errors, setErrors] = useState([]); 
    const { id } = useParams();
    const [pirateName, setPirateName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [numberOfChests, setNumberOfChests] = useState('');
    const [pirateCatchPhrase, setPirateCatchPhrase] = useState('');
    const [crewPosition, setCrewPosition] = useState('');
    const [pegLeg, setPegLeg] = useState('');
    const [eyePatch, setEyePatch] = useState('');
    const [hookHand, setHookHand] = useState('');
    const history = useHistory();

    
    useEffect(() => {
        axios.get('http://localhost:8014/api/pirate/' + id)
            .then(res => {
                setPirateName(res.data.pirateName);
                setImageUrl(res.data.imageUrl);
                setNumberOfChests(res.data.numberOfChests);
                setPirateCatchPhrase(res.data.pirateCatchPhrase);
                setCrewPosition(res.data.crewPosition);
                setPegLeg(res.data.pegLeg);
                setEyePatch(res.data.eyePatch);
                setHookHand(res.data.hookHand);
            })
            
    }, []);

    
    const updatePirate = e => {
        e.preventDefault();
        axios.put('http://localhost:8014/api/pirate/' + id, {
        pirateName, 
        imageUrl, 
        numberOfChests, 
        pirateCatchPhrase, 
        crewPosition, 
        pegLeg, 
        eyePatch, 
        hookHand
        })
            .then(res => history.push("/pirate/"))
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            }) 
        }
    
    return (
        
            
            <form onSubmit={updatePirate}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Pirate Name</label><br />
                    <input type="text" 
                    name="pirateName" 
                    value={pirateName} 
                    onChange={(e) => { setPirateName(e.target.value) }} />
                </p>
                <p>
                    <label>imageUrl</label><br />
                    <input type="text" 
                    name="imageUrl"
                    value={imageUrl} 
                    onChange={(e) => { setImageUrl(e.target.value) }} />
                </p>
                <p>
                    <label>Number of Chests</label><br />
                    <input type="number" 
                    name="numberOfChests"
                    value={numberOfChests} 
                    onChange={(e) => { setNumberOfChests(e.target.value) }} />
                </p>
                <p>
                    <label>Catch Phrase</label><br />
                    <input type="text" 
                    name="pirateCatchPhrase"
                    value={pirateCatchPhrase} 
                    onChange={(e) => { setPirateCatchPhrase(e.target.value) }} />
                </p>
                <p>
                    <label>Crew Position</label><br />
                    <input type="text" 
                    name="crewPosition"
                    value={crewPosition} 
                    onChange={(e) => { setCrewPosition(e.target.value) }} />
                </p>
                <p>
                    <label>Peg Leg</label><br />
                    <input type="text" 
                    name="pegLeg"
                    value={pegLeg} 
                    onChange={(e) => { setPegLeg(e.target.value) }} />
                </p>
                <p>
                    <label>Eye Patch</label><br />
                    <input type="text" 
                    name="eyePatch"
                    value={eyePatch} 
                    onChange={(e) => { setEyePatch(e.target.value) }} />
                </p>
                <p>
                    <label>Hook Hand</label><br />
                    <input type="text" 
                    name="hookHand"
                    value={hookHand} 
                    onChange={(e) => { setHookHand(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
    )
}
    
export default Update;