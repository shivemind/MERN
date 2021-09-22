import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const history = useHistory();
    
    useEffect(() => {
        axios.get('http://localhost:8012/api/author/' + id)
            .then(res => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
            })
    }, []);
    
    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8012/api/author/' + id, {
            firstName,
            lastName
        })
            .then(res => history.push('/author'))
            .catch(err => console.error(err));
        }
    
    return (
        <div>
            <h1>Update a Author</h1>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>First Name</label><br />
                    <input type="text" 
                    name="firstName" 
                    value={firstName} 
                    onChange={(e) => { setFirstName(e.target.value) }} />
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input type="text" 
                    name="Last Name"
                    value={lastName} 
                    onChange={(e) => { setLastName(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;