import React from "react";

function PlantCard({plant, handleDelete}) {
    
    function handleClick() {
        handleDelete(plant.id)
    }

    return (
        <div className="gridChild">
            <img className="plantImage" src={plant.image} alt={plant.name} />
            <h2>{plant.name}</h2>
            <button className="button" onClick={handleClick}>🔥Remove🔥</button>
        </div>
    )
}

export default PlantCard