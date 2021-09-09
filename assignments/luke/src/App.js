import { BrowserRouter, Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import People from './components/People';
import Navbar from "./components/Navbar";
import Auth from "./views/Auth";
import Form from "./components/Form";
import Dashboard from "./views/Dashboard";
import Error from './views/Error';
import Planets from './components/Planets';

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
            <fieldset>
                <legend>Star Wars</legend>
                <Form />
                <hr />
                <Switch>
                    <Route path="/people/:people_id">
                        <People />
                    </Route>
                    <Route path="/planets/:planet_id">
                        <Planets />
                    </Route>
                    <Route path="/error">
                        <Error />
                    </Route>
                </Switch>
            </fieldset>
        </BrowserRouter>
    
    </div>
  );
}

export default App;
