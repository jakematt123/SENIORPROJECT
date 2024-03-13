import React from "react"
import Navbar from "../_components/navbar/Navbar"
import Footer from "../_components/footer/Footer"



const FAQ: React.FC = () => {
    return(
        <div>
            <Navbar/>
            <div className="w-full h-full">
                <h1 className="text-left text-3xl">Frequently Asked Questions</h1>
            </div>
            
            
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default FAQ;