import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom'

function PlantDetail() {
    const [plant, setPlant] = useState(null)
    const {id} = useParams()

    useEffect( () => {
        fetch(`http://localhost:3004/plants/${id}`)
        .then(resp => {
            if (!resp.ok) {
                console.log("jello")
            }
            return resp.json()
        })
        .then(data => {
            if (Object.keys(data).length === 0) {
                return setPlant("empty")
            }
            else {
                setPlant(data)
            }
            
        })
    }, [id])

    if (!plant) {
        return <div style={{color: "white", fontSize: "larger"}}>Page Loading</div>
    }

    if (plant === "empty") {
        return <h1 className='main' style={{justifyContent: "center", alignItems: "center", fontSize: "6rem", textAlign: "center"}}>Oops!!! <br/>404 NOT FOUND! <br/>Try Again...</h1>
    }

    
    const {name, image, fact, description} = plant
    return (
        <div className="main">
            <div className="mainChild">
                <img className="plantImage" src={image} alt={name}/>
                <h2>{name}</h2>
                <h3>Fun Fact: {fact}</h3>
                <h3>Description: {description}</h3>
            </div>
        </div>
    )
}

export default PlantDetail