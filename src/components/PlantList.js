import React from "react";
import PlantCard from './PlantCard';

function PlantList( {plants} ) {
    
    const allPlants = plants.map(plant => {
        return (
            <PlantCard key={plant.id} plant={plant}/>
        )
    })
    
    
    return (
        <div className="grid">
            {allPlants}
        </div>
    )
}

export default PlantList
