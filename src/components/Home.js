import React from "react";
import PlantList from "./PlantList.js";

function Home({plants, handleDelete}) {

    return (
    <div>
        <div className="main">
        <h1 className="mainChild">Pick a Plant</h1>
        </div>
        <div className="main">
        <h3 className="mainChild">Click on any of the following plants to learn more about it!</h3>
        </div>
        <PlantList plants={plants} handleDelete={handleDelete}/>
    </div>
    )
}

export default Home;