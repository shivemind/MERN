import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory, Link } from "react-router-dom";
    
const Update = (props) => {
    const [errors, setErrors] = useState([]); 
    const { id } = useParams();
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');
    const [petDescription, setPetDescription] = useState('');
    const [skillOne, setSkillOne] = useState('');
    const [skillTwo, setSkillTwo] = useState('');
    const [skillThree, setSkillThree] = useState('');
    const history = useHistory();

    
    useEffect(() => {
        axios.get('http://localhost:8015/api/pet/' + id)
            .then(res => {
                setPetName(res.data.petName);
                setPetType(res.data.petType);
                setPetDescription(res.data.petDescription);
                setSkillOne(res.data.skillOne);
                setSkillTwo(res.data.skillTwo);
                setSkillThree(res.data.skillThree);
            })
            
    }, []);

    
    const updatePet = e => {
        e.preventDefault();
        axios.put('http://localhost:8015/api/pet/' + id, {
            petName, 
            petType, 
            petDescription, 
            skillOne, 
            skillTwo, 
            skillThree,
        })
            .then(res => history.push("/pet/"))
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
        
            
            <form onSubmit={updatePet}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <h1>Pet Shelter</h1>
                <p>
                    <label>Pet Name</label><br />
                    <input type="text" 
                    name="petName" 
                    value={petName} 
                    onChange={(e) => { setPetName(e.target.value) }} />
                </p>
                <p>
                    <label>Pet Type</label><br />
                    <input type="text" 
                    name="petType"
                    value={petType} 
                    onChange={(e) => { setPetType(e.target.value) }} />
                </p>
                <p>
                    <label>Pet Description</label><br />
                    <input type="text" 
                    name="petDescription"
                    value={petDescription} 
                    onChange={(e) => { setPetDescription(e.target.value) }} />
                </p>
                <p>
                    <label>Skill One</label><br />
                    <input type="text" 
                    name="skillOne"
                    value={skillOne} 
                    onChange={(e) => { setSkillOne(e.target.value) }} />
                </p>
                <p>
                    <label>SkillTwo</label><br />
                    <input type="text" 
                    name="skillTwo"
                    value={skillTwo} 
                    onChange={(e) => { setSkillTwo(e.target.value) }} />
                </p>
                <p>
                    <label>Skill Three</label><br />
                    <input type="text" 
                    name="skillThree"
                    value={skillThree} 
                    onChange={(e) => { setSkillThree(e.target.value) }} />
                </p>
                
                <input type="submit" />
            </form>
            
    )
}
    
export default Update;