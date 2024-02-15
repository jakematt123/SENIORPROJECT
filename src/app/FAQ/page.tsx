import React, { useState } from "react"
import Navbar from "../_components/Navbar"
import Footer from "../_components/Footer"



const FAQ: React.FC = () => {
    return(
        <div>
            <Navbar/>
            <h1 className="text-left text-3xl">Frequently Asked Questions</h1>
            
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default FAQ;