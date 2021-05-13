import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Sub from './pages/Sub'
import ReactDOM from 'react-dom';

function App() {  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => <Home {...props}/>} />
        <Route path="/sub" render={props => <Sub {...props}/>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
