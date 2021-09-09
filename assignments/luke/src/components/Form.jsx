import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';


const Form = () => {
    const [category, setCategory] = useState();
    const [id, setId] = useState();

    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault()

        history.push(`/${category}/${id}`)
    }





    return (
        <feildset>
            <legend>Form.Jsx</legend>
            <form onSubmit={submitHandler} action=''>
                <p>
                    Category: 
                    <select name="category" id="" onChange={e => setCategory(e.target.value)}>
                        <option value="">Select Category</option>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                    <input type="number" name='id' id='' onChange={e => setId(e.target.value)} />
                    <button>Get Info</button>

                </p>
            </form>
        </feildset>



    )
}

export default Form;