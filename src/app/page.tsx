import Banner from "./_components/Banner";
import Navbar from "./_components/navbar/Navbar"
import Footer from "./_components/footer/Footer"
import React from "react";
import type { NextPage } from "next";

const Home: NextPage =  () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Footer/>   
        </div>
        
    )
}

export default Home;