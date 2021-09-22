import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();
    
    useEffect(() => {
        axios.get('http://localhost:8011/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setDescription(res.data.description);
            })
    }, []);
    
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8011/api/product/' + id, {
            title,
            description
        })
            .then(res => history.push('/product'))
            .catch(err => console.error(err));
        }
    
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;