import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
    
const AuthorList = (props) => {
    const { removeFromDom } = props;
    
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8012/api/author/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            {props.author.map((author, idx) => {
                return <p key={idx}>
                    {author.lastName}, {author.firstName}
                    <Link to={"/author/" + author._id}><button>Edit</button>
                        
                    </Link>
                    

                    <button onClick={(e)=>{deleteAuthor(author._id)}}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}
    
export default AuthorList;