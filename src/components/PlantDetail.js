import React, {useState, useEffect} from "react";
import { useParams, useHistory  } from 'react-router-dom'

function PlantDetail() {
    const [plant, setPlant] = useState(null)
    const [clicked, setClicked] = useState(true)
    const {id} = useParams()
    const history = useHistory()
    
    function handleClick() {
        setClicked(clicked => !clicked)
    }

    function handleReturnClick() {
        history.push('/plants')
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
        return <div className="main error">Page Loading</div>
    }

    if (plant === "empty") {
        return <h1 className='main error'>Oops!!!<br/>404 NOT FOUND!<br/>Plant does not exist!</h1>
    }

    
    const {name, image, fact, description} = plant
    return (
        <div className="main">
            <div className="mainChild">
                <img className={clicked ? "plantImage" : "largePlantImage"} src={image} alt={name} onClick={handleClick}/>
                <h2>{name}</h2>
                <h3>Fun Fact: {fact}</h3>
                <h3>Description: {description}</h3>
                <button className="button" onClick={handleReturnClick}>Return to All Plants</button>
            </div>
        </div>
    )
}

export default PlantDetail