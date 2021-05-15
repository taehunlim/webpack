import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import {Home, Sub, Register} from './pages'
import ReactDOM from 'react-dom';

function App() {  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => <Home {...props}/>} />
        <Route path="/sub" render={props => <Sub {...props}/>} />
        <Route path="/register" render={props => <Register {...props}/> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
