import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
    
const PirateList = (props) => {
    const { removeFromDom } = props;
    
    const deletePirate = (pirateId) => {
        axios.delete('http://localhost:8014/api/pirate/' + pirateId)
            .then(res => {
                removeFromDom(pirateId)
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            {props.pirate.map((pirate, idx) => {
                return <p key={idx}>
                    {pirate.pirateName}
                    <Link to={"/pirate/" + pirate._id}><button>View</button>
                        
                    </Link>
                    

                    <button onClick={(e)=>{deletePirate(pirate._id)}}>
                        Delete
                    </button>
                    <Link to={"/pirate/" + pirate._id + "/edit"}><button>Edit</button>
                        
                    </Link>
                </p>
            })}
        </div>
    )
}
    
export default PirateList;