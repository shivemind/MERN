import React, { useState } from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';
export default () => {
    //keep track of what is being typed via useState hook
    const [errors, setErrors] = useState([]); 
    const [pirateName, setPirateName] = useState(""); 
    const [imageUrl, setImageUrl] = useState("");
    const [numberOfChests, setNumberOfChests] = useState("");
    const [pirateCatchPhrase, setPirateCatchPhrase] = useState("");
    const [crewPosition, setCrewPosition] = useState("");
    const [pegLeg, setPegLeg] = useState("no");
    const [eyePatch, setEyePatch] = useState("no");
    const [hookHand, setHookHand] = useState("no");
    const history = useHistory();
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new pirate
        axios.post('http://localhost:8014/api/pirate/create', {
        pirateName, 
        imageUrl, 
        numberOfChests, 
        pirateCatchPhrase, 
        crewPosition, 
        pegLeg,
        eyePatch,
        hookHand
        })
            .then(res=>history.push("/pirate/"))
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
    //onChange to update Pirate stuff
    return (
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Pirate Name</label><br/>
                <input type="text" onChange={(e)=>setPirateName(e.target.value)} value={pirateName}/>
            </p>
            <p>
                <label>imageUrl</label><br/>
                <input type="text" onChange={(e)=>setImageUrl(e.target.value)} value={imageUrl}/>
            </p>
            
            <p>
                <label>Chests</label><br/>
                <input type="number" onChange={(e)=>setNumberOfChests(e.target.value)} value={numberOfChests}/>
                
            </p>
            <p>
                <label>Catch Phrase</label><br/>
                <input type="text" onChange={(e)=>setPirateCatchPhrase(e.target.value)} value={pirateCatchPhrase}/>
            </p>
            <p>
                <label>Crew Position</label><br/>
                
                
                <select name="crewPosition" id="crewPosition" onChange={(e)=>setCrewPosition(e.target.value)} value={crewPosition}>
                        <option value="nothing"></option>
                       <option value="matey">Matey</option>
                       <option value="captain">Captain</option>
                        <option value="shiphand">ship-hand</option>
                        <option value="bird nest guy">bird nest guy</option>
                </select>
            
            </p>
            <p>
                <label>Peg Leg</label><br/>
                <input type="checkbox" onChange={(e)=>setPegLeg("yes")} value={pegLeg}/>
            </p>
            <p>
                <label>Eye Patch</label><br/>
                <input type="checkbox" onChange={(e)=>setEyePatch("yes")} value={eyePatch}/>
            </p>
            <p>
                <label>Hook Hand</label><br/>
                <input type="checkbox" onChange={(e)=>setHookHand("yes")} value={hookHand}/>
            </p>
            
            <input type="submit"/>
        </form>
    )
}
