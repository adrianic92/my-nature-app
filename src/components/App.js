import React, {useState, useEffect} from 'react'
import '../App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import New from './New';

function App() {

  const [plants, setPlants] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3004/plants")
    .then(resp => resp.json())
    .then(data => setPlants(data))
  }, [])
  
  function addPlant(plant) {
    fetch("http://localhost:3004/plants", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(plant)
    })
    .then(resp => resp.json())
    .then(data => setPlants([...plants, data]))
    
    
    
    console.log(plant)
  }


  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/">
          <Home plants={plants}/>
        </Route>
        <Route exact path="/new">
          <New addPlant={addPlant}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;