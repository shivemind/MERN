import React, { useState } from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';
export default () => {
    //keep track of what is being typed via useState hook
    const [errors, setErrors] = useState([]); 
    const [petName, setPetName] = useState(""); 
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const history = useHistory();
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new pirate
        axios.post('http://localhost:8015/api/pet/create', {
        petName, 
        petType, 
        petDescription, 
        skillOne, 
        skillTwo, 
        skillThree,
        })
            .then(res=>history.push("/pet/"))
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
    //onChange to update Pet stuff
    return (
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Pet Name</label><br/>
                <input type="text" onChange={(e)=>setPetName(e.target.value)} value={petName}/>
            </p>
            <p>
                <label>Pet Type</label><br/>
                <input type="text" onChange={(e)=>setPetType(e.target.value)} value={petType}/>
            </p>
            
            <p>
                <label>Pet Description</label><br/>
                <input type="text" onChange={(e)=>setPetDescription(e.target.value)} value={petDescription}/>
                
            </p>
            <p>
                <label>Skill One</label><br/>
                <input type="text" onChange={(e)=>setSkillOne(e.target.value)} value={skillOne}/>
            </p>
            <p>
                <label>Skill Two</label><br/>
                <input type="text" onChange={(e)=>setSkillTwo(e.target.value)} value={skillTwo}/>
            </p>
            <p>
                <label>Skill Three</label><br/>
                <input type="text" onChange={(e)=>setSkillThree(e.target.value)} value={skillThree}/>
            </p>
            
            <input type="submit"/>
        </form>
    )
}
