import React, {useState} from 'react';
import Form from './components/Form';
import Results from './components/Results';
import UserForm from './components/UserForm';
import Handle from './components/Handle';
import logo from './logo.svg';
import './App.css';

function App() {

  const [state, setState] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword: ""
  })

  return (
    <div className="App">
      {/* <Form inputs={state} setInputs={setState} /> */}
      <Results data={state} />
      {/* <UserForm inputs={state} setInputs={setState} />
      <Handle inputs={state} setInputs={setState} /> */}



    </div>
  );
}

export default App;
