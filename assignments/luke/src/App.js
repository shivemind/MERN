import { BrowserRouter, Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon';
import Navbar from "./components/Navbar";
import Auth from "./views/Auth";
import Form from "./components/Form";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <div className="App">
      return(
        <BrowserRouter>
          <fieldset>
            <legend>
              Pokemon

            </legend>
            <Form />
            <hr/> 
            <Switch>
              <Route path="/pokemon/:poke_id">
                <Pokemon />
              </Route>
k
            </Switch>
          </fieldset>
        </BrowserRouter>
      )
    </div>
  );
}

export default App;
