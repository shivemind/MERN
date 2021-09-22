import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PetForm from '../components/PetForm';
import { Link } from "react-router-dom";
    
const Create = (props) => {

    
    return (
        <div>
            <h1>Know a pet that needs a home?</h1>
            <PetForm/>
            <Link to={"/pet/"}>
                    Home
                </Link> 
        </div>
    );
}
    
export default Create;