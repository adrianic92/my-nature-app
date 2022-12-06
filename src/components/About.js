import React from "react";

function About() {
  return (
    <div>
        <div className="centeredParent">
            <h1 className="aboutChild">ABOUT</h1>
            <br/>            
            <p className="aboutChild">Welcome to my plant application! Thanks for stopping by. A little bit about this application... Users can see a list of all of the different plants we currently have available by clicking on the Plants link above.<br/><br/> If you would like to add a plant, visit the Add A Plant section by clicking the above link. A form will be displayed, allowing you to add information about the new plant, including the name, image, description, and fun fact.<br/><br/>We are in need of some more plants.<br/><br/>Images were found via the Pexels website.</p>
            <img className="aboutImage" alt="flower" src="https://drive.google.com/uc?export=view&id=1ZZ-1AAzoo0WLk7nKKuh--kgrsBC6lMGe"/>
        </div>
        
    </div>
  )
}

export default About;