import React from "react";

function PlantCard({plant}) {
    return (
        <div className="gridChild">
            <img className="plantImage" src={plant.image} alt={plant.name} />
            <h2>{plant.name}</h2>
        </div>
    )
}

export default PlantCard