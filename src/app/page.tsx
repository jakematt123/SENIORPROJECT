"use client"
import Topnavbar from "./_components/Topnavbar"
import React from "react";



function Home() {
    const handleClick = () => {
        alert("Button works")
    }

    return (
        <div>
            <Topnavbar/>
            <h1>Hello This is a test</h1>
            <br/>
            <ol>
                <li><em>Wow I am bad at html</em></li>
                <li>Yes you are jake</li>
            </ol>
            <br/>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Testing :L</button>
        
        </div>
        
    )
}

export default Home;