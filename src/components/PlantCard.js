import React from "react";
import {Link} from "react-router-dom"

function PlantCard({plant, handleDelete}) {
    
    function handleClick() {
        handleDelete(plant.id)
    }

    return (
        <div className="gridChild" style={{ backgroundImage: `url(${plant.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <button className="delete" onClick={handleClick}>🔥Remove🔥</button>
            <br />
            <Link className="info" to={`/plants/${plant.id}`}>⭐More Info⭐</Link>
        </div>
    )
}

export default PlantCard