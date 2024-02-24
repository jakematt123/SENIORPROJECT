import React, { useState } from "react"
import Navbar from "../_components/navbar/Navbar"
import Footer from "../_components/footer/Footer"



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