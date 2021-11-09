import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
    
const Detail = (props) => {
    const [story, setStory] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8012/api/stories/' + id)
            .then(res => setStory(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p>Title: {story.title}</p>
            <p>Author: {story.author}</p>
            <Link to={"/stories/" + id + "/edit"}>
    Edit
</Link>
        </div>
    )
}
    
export default Detail;