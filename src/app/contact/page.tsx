import React from "react"
import Navbar from "../_components/navbar/Navbar"
import ContactUsButton from "../_components/contactUsForm"
import Footer from "../_components/footer/Footer"


const Contact: React.FC = () => {

    return (

        <div className="flex-col h-screen w-screen">
            <Navbar/>
            <div className="my-6 mx-auto max-w-xl bg-white font-[sans-serif]">
                <h1 className="text-3xl text-[#333] font-extrabold text-center">Contact Us</h1>
                <h2 className=" text-[#333] text-center">We will get back to you as soon as we can</h2>
                <ContactUsButton/>
            </div>
            <div>
                <Footer/>
            </div>   
        </div>
    )
}

export default Contact;