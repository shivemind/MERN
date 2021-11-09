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
      <div classname="App">
        <Route exact path="/stories/:id">
          <Detail />
        </Route>
        <Route exact path="/stories/">
          <Main />
        </Route>
        
        <Route exact path="/stories/:id/edit">
    <Update />
</Route>
        
      </div>
      </Switch>
    </BrowserRouter>
  );
}
    
export default App;