import React from "react";
import PlantCard from './PlantCard';

function PlantList( {plants, handleDelete} ) {
    
    const allPlants = plants.map(plant => {
        return (
            <PlantCard key={plant.id} plant={plant} handleDelete={handleDelete}/>
        )
    })
    
    
    return (
        <div className="grid">
            {allPlants}
        </div>
    )
}

export default PlantList
