import React from "react";
import {Link} from "react-router-dom"

function PlantCard({plant, handleDelete}) {
    
    function handleClick() {
        handleDelete(plant.id)
    }

    return (
        <div className="gridChild">
            <img className="plantImage" src={plant.image} alt={plant.name} />
            <h2>{plant.name}</h2>
            <button className="button delete" onClick={handleClick}>🔥Remove🔥</button>
            <br />
            <Link className="button" to={`/plants/${plant.id}`}>⭐More Info⭐</Link>
        </div>
    )
}

export default PlantCard