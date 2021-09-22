import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
    
const Detail = (props) => {
    const [author, setAuthor] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8012/api/author/' +id)
            .then(res => setAuthor(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p>First Name: {author.firstName}</p>
            <p>Last Name: {author.lastName}</p>
                <Link to={"/author/" + author._id + "/edit"}>
                    Edit
                </Link> 
        </div>
    )
}
    
export default Detail;