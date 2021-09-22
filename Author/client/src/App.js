import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route exact path="/author/">
            <Main />
          </Route>
          <Route exact path="/author/:id">
            <Detail />
          </Route>
          <Route exact path="/author/:id/edit">
            <Update />
          </Route>

        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
