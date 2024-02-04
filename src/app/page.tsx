'use client'
import Navbar from "./_components/navbar"
import React from "react";



function Home() {
    const handleClick = () => {
        alert("Button works")
    }

    const navLinks = [
        { text: 'Home', url: '/' },
        { text: 'About', url: '/about' },
        { text: 'Contact', url: '/contact' },
        { text: 'Login', url: '/login'},
        { text: 'Store', url: '/store'}
    ];

    return (
        <div>
            <Navbar links={navLinks}/>
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