import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PirateForm from '../components/PirateForm';
import { Link } from "react-router-dom";
    
const Create = (props) => {

    
    return (
        <div>
            <PirateForm/>
            <Link to={"/pirate/"}>
                    Home
                </Link> 
        </div>
    );
}
    
export default Create;