import React, { useState } from  'react';

const Hanlde = (props) => {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    
    const handleName = (e) => {
        setName(e.target.value);
        if(e.target.value.length < 1) {
            setNameError("Name is required!");
        } else if(e.target.value.length < 3) {
            setNameError("Name must be 3 characters or longer!");
        }
    }
    
    {/* rest of component removed for brevity */}
    
    return (
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>Name: </label>
                <input type="text" onChange={ handleName } />
                {
                    nameError ?
                    <p style={{color:'red'}}>{ nameError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};

export default Hanlde;