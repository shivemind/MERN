import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const StoryList = (props) => {
    const { removeFromDom } = props;
    
    const deleteStory = (storyId) => {
        axios.delete('http://localhost:8012/api/stories/' + storyId)
            .then(res => {
                removeFromDom(storyId)
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            {props.stories.map((story, idx) => {
                return <p key={idx}>
                    <Link to={"/stories/" + story._id}>
                        {story.author}, {story.title}
                    </Link>
                    |
                    <button onClick={(e)=>{deleteStory(story._id)}}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}
    
export default StoryList;