import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const history = useHistory();
    
    useEffect(() => {
        axios.get('http://localhost:8012/api/stories/' + id)
            .then(res => {
                setTitle(res.data.title);
                setAuthor(res.data.author);
            })
    }, []);
    
    const updateStory = e => {
        e.preventDefault();
        axios.put('http://localhost:8012/api/stories/' + id, {
            title,
            author
        })
            .then(res => history.push('/stories'))
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Story</h1>
            <form onSubmit={updateStory}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Author</label><br />
                    <input type="text" 
                    name="author"
                    value={author} 
                    onChange={(e) => { setAuthor(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;