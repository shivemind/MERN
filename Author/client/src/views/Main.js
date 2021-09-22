import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
    
const Main = (props) => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8012/api/author')
            .then(res=>{
                console.log(res.data.data)
                setAuthor(res.data);
                
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    
    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id != authorId));
    }
    
    return (
        <div>
            <AuthorForm/>
            <hr/>
            {loaded && <AuthorList author={author} removeFromDom={removeFromDom}/>}
        </div>
    );
}
    
export default Main;