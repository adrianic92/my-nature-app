import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom'

function PlantDetail() {
    const [plant, setPlant] = useState(null)
    const [clicked, setClicked] = useState(true)
    const {id} = useParams()

    function handleClick() {
        setClicked(clicked => !clicked)
    }

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
        return <h1 className='main error'>Oops!!!<br/>404 NOT FOUND!<br/>Try Again...</h1>
    }

    
    const {name, image, fact, description} = plant
    return (
        <div className="main">
            <div className="mainChild">
                <img className={clicked ? "plantImage" : "largePlantImage"} src={image} alt={name} onClick={handleClick}/>
                <h2>{name}</h2>
                <h3>Fun Fact: {fact}</h3>
                <h3>Description: {description}</h3>
            </div>
        </div>
    )
}

export default PlantDetail