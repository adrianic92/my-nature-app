import React from "react";

function PlantCard({plant}) {
    return (
        <div className="gridChild">
            <img className="plantImage" src={plant.image} alt={plant.name} />
            <h2>{plant.name}</h2>
            <button className="button">🔥Remove🔥</button>
        </div>
    )
}

export default PlantCard