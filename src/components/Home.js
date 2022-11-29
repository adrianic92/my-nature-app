import React from "react";
import HomeImages from "./HomeImages";

function Home() {

    return (
    <div className="parentMainGrid">
        <div className="mainGrid">
            <HomeImages />  
        </div>
        <div className="main">
            <h2 className="mainChild" style={{fontStyle: "italic", fontFamily: "sansSerif"}}>Find a plant that you love</h2>
        </div>
    </div>
    )
}

export default Home;