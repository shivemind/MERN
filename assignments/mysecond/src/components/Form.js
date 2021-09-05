import React from "react";

const Form = (props) =>{
    const{inputs, setInputs} = props;

    const onChange = e =>{
        setInputs({ 
            ...inputs,
            [e.target.name]: e.target.value

        });
    };
    return(
        <form>
        <div classname="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input onChange={onChange} type="text" name="firstName" id=""></input>
        </div>
        <div classname="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input onChange={onChange} type="text" name="lastName" id=""></input>
        </div>
        <div classname="form-group">
                <label htmlFor="email">email:</label>
                <input onChange={onChange} type="text" name="email" id=""></input>
        </div>
        <div classname="form-group">
                <label htmlFor="password">password:</label>
                <input onChange={onChange} type="text" name="password" id=""></input>
                </div>
        <div classname="form-group">
                <label htmlFor="confirmPassword">confirm password:</label>
                <input onChange={onChange} type="text" name="confirmPassword" id=""></input>
        </div>
        
    </form>
    );
};
export default Form;