import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import Create from './views/Create';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        
      <Route exact path="/pirate/create">
            <Create />
          </Route>
          <Route exact path="/pirate">
            <Main />
          </Route>
          <Route exact path="/pirate/:id">
            <Detail />
          </Route>
          <Route exact path="/pirate/:id/edit">
            <Update />
          </Route>
  
          
      </Switch>
    </BrowserRouter>
  );
}

export default App;
