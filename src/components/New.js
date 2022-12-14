import React, {useState} from "react";

function New({addPlant}) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [fact, setFact] = useState("")
    const [description, setDescription] = useState("")

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleImageChange(e) {
        setImage(e.target.value)
    }
    
    function handleFactChange(e) {
        setFact(e.target.value)
    }
    
    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newPlant = {
            "name": name, "image": image, "fact": fact, "description": description
        }
        addPlant(newPlant)
        setName("")
        setImage("")
        setFact("")
        setDescription("")
    }
  return (
    <div>
        <div className="main">
            <h1 className="mainChild">Add a New Plant Here</h1>
        </div>
        <div>
            <form className="centeredParent" onSubmit={handleSubmit}>
                <label for="name">Name:</label>
                <input type="text" name="name" className="formChild" value={name} onChange={handleNameChange}/>
                <label for="image">Image URL:</label>
                <input type="text" name="image" className="formChild" value={image} onChange={handleImageChange}/>
                <label for="fact">Fun Fact:</label>
                <textarea type="text" name="fact" className="formChild long" value={fact} onChange={handleFactChange}/>
                <label for="description">Description:</label>
                <textarea type="text" name="description" className="formChild long" value={description} onChange={handleDescriptionChange}/>
                <button className="formChild button" type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default New;