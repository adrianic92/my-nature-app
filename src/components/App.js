import React, {useState, useEffect} from 'react'
import '../App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import New from './New';
import PlantDetail from './PlantDetail';

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
  }

  function handleDelete(id) {
    fetch(`http://localhost:3004/plants/${id}`, {
      method: "DELETE"})
      .then(resp => resp.json())
      .then(() => {
        const updatedPlants = plants.filter( plant => plant.id !== id )
        setPlants(updatedPlants)
      })
  }


  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/plants">
          <Home plants={plants} handleDelete={handleDelete}/>
        </Route>
        <Route exact path="/new">
          <New addPlant={addPlant}/>
        </Route>
        <Route path="/plants/:id">
          <PlantDetail />
        </Route>
        <Route path="*">
          <h1 className='main' style={{justifyContent: "center", alignItems: "center", fontSize: "7rem", textAlign: "center"}}>Oops!!! <br/>404 NOT FOUND! <br/>Try Again...</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;