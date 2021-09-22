import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
    
const PetList = (props) => {
    const { removeFromDom } = props;
    
    const deletePet = (petId) => {
        axios.delete('http://localhost:8015/api/pet/' + petId)
            .then(res => {
                removeFromDom(petId)
            })
            .catch(err => console.error(err));
    }
    
    return (
        
        <div>
            <h1>Pet Shelter</h1>
            {props.pet.map((pet, idx) => {
                return <p key={idx}>
                    {pet.petName}    {pet.petType}    
                    <Link to={"/pet/" + pet._id}><button>Details</button>
                        
                    </Link>
                    

                    
                    <Link to={"/pet/" + pet._id + "/edit"}><button>Edit</button>
                        
                    </Link>
                </p>
            })}
        </div>
    )
}
    
export default PetList;