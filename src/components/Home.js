import React from "react";
import HomeImages from "./HomeImages";

function Home() {

    return (
    <div className="parentMainGrid">
        <div className="mainGrid">
            <HomeImages />  
        </div>
        <div className="homeRight">
            <h2 className="homeRightChild">Plants are great!</h2>
        </div>
    </div>
    )
}

export default Home;