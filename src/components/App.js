import React from 'react'
import '../App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import New from './New';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/new">
          <New/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;