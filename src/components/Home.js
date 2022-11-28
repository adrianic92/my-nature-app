import React from "react";
import PlantList from "./PlantList.js";

function Home({plants, handleDelete}) {

    return (
    <div>
        <div className="main">
        <h1 className="mainChild">Pick a Plant</h1>
        </div>
        <div className="main">
        <h3 className="mainChild">Click on any of the following plant images to learn more about the plant :</h3>
        </div>
        <PlantList plants={plants} handleDelete={handleDelete}/>
    </div>
    )
}

export default Home;