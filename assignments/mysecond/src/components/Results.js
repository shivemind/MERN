import React, { useState } from  'react';

const Results = (props) =>{
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("Entry is required!");
        } else if(e.target.value.length < 3) {
            setFirstNameError("Entry must be 3 characters or longer!");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Entry is required!");
        } else if(e.target.value.length < 3) {
            setFirstNameError("Entry must be 3 characters or longer!");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Entry is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Entry must be 5 characters or longer!");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Entry is required!");
        } else if(e.target.value.length < 5) {
            setPasswordError("Entry must be 5 characters or longer!");
        }
    }


    return(
        <div>
            <h1>Results</h1>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>email: {email}</p>
            <p>password: {password}</p>
            

            <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>Name: </label>
                <input type="text" onChange={ handleFirstName } />
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ handleLastName } />
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ handleEmail} />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>password: </label>
                <input type="text" onChange={ handlePassword} />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
        </div>
    );
};

export default Results;


// const Hanlde = (props) => {
//     const [name, setName] = useState("");
//     const [nameError, setNameError] = useState("");
    
//     const handleName = (e) => {
//         setName(e.target.value);
//         if(e.target.value.length < 1) {
//             setNameError("Name is required!");
//         } else if(e.target.value.length < 3) {
//             setNameError("Name must be 3 characters or longer!");
//         }
//     }
    
//     {/* rest of component removed for brevity */}
    
//     return (
//         <form onSubmit={ (e) => e.preventDefault() }>
//             <div>
//                 <label>Name: </label>
//                 <input type="text" onChange={ handleName } />
//                 {
//                     nameError ?
//                     <p style={{color:'red'}}>{ nameError }</p> :
//                     ''
//                 }
//             </div>
//             <input type="submit" value="Create User" />
//         </form>
//     );
// };