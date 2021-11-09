import React, { useEffect, useState } from 'react'
import axios from 'axios';
import StoryForm from '../components/StoryForm';
import StoryList from '../components/StoryList';
    
const Main = (props) => {
    const [stories, setStories] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8012/api/stories')
            .then(res=>{
                setStories(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    
    const removeFromDom = storyId => {
        setStories(stories.filter(story => story._id != storyId));
    }
    
    return (
        <div>
        <StoryForm/>
        <hr/>
        {loaded && <StoryList stories={stories} removeFromDom={removeFromDom}/>}
        </div>
    );
}
    
export default Main;