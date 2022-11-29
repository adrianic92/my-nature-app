import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom'

function PlantDetail() {
    const [plant, setPlant] = useState(null)
    const {id} = useParams()

    useEffect( () => {
        fetch(`http://localhost:3004/plants/${id}`)
        .then(resp => resp.json())
        .then(data => setPlant(data))
    }, [id])

    if (!plant) {
        return <div style={{color: "white", fontSize: "larger"}}>Page Loading</div>
    }
    
    const {name, image, fact, description} = plant
    console.log(plant)
    return (
        <div className="main">
            <div className="mainChild">
                <img className="plantImage" src={image} alt={name} />
                <h2>{name}</h2>
                <h3>Fun Fact: {fact}</h3>
                <h3>Description: {description}</h3>
            </div>
        </div>
    )
}

export default PlantDetail