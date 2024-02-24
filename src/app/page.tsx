import Banner from "./_components/Banner";
import Navbar from "./_components/navbar/Navbar"
import Footer from "./_components/footer/Footer"
import React from "react";
import { NextPage } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";


const Home: NextPage = async () => {
    const session = await getServerSession(authOptions);
    return (
        <div>
            <Navbar session={session}/>
            <Banner/>
            <Footer />   
        </div>
        
    )
}

export default Home;