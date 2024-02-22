import Banner from "./_components/Banner";
import Navbar from "./_components/Navbar"
import Footer from "./_components/Footer"
import React from "react";
import { NextPage } from "next";



const Home: NextPage = () => {

    return (
        <div>
            <Navbar/>
            <Banner/>
            <Footer />   
        </div>
        
    )
}

export default Home;