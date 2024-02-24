import React from "react"
import TopNavbar from "./TopNavbar"
import { getServerSession } from "next-auth"
import { authOptions } from "~/server/auth"

const Navbar: React.FC = async () => {
    const session = await getServerSession(authOptions)
    return (
        <TopNavbar session={session}/>
    )
    
}


export default Navbar;