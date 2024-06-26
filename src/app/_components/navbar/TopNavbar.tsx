"use client"

import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { listItems } from "../../_constants/TopBarListItems";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { FaShoppingCart } from "react-icons/fa";
import Bottomnavbar from "./Bottomnavbar";
import { useRouter } from "next/navigation";
import Image from "next/image";
import type { Session } from "next-auth";
import DropdownComponent from "./DropDown";
import { Client } from "~/app/api/Client";
const logo = "/RaysLogoTransparent.png"
const location = "Tampa, FL"

const TopNavbar: React.FC<{ session: Session | null }> = ({ session }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [search, setSearch] = useState<string>("");
    const router = useRouter();

    // Do something with search here
    async function searchAction(search: string, event?: React.KeyboardEvent): Promise<void> {
        console.log(search, event?.key, search.length)
        if(event?.key !== "Enter" || !search.length) return;
        if(!search.length) return
        console.log("searching...")
        const data = await Client.dbRouter.getItemByName.query({name: search});
        alert(JSON.stringify(data));
        
    }

    return (
        <div className="w-full xs:w-fit">
            <div className="bg-amazon_blue text-white px-4 py-3 flex item-center gap-4">
                {/* Logo Div */}
                <div onClick={()=> router.push("/")} className="px-2 overflow-hidden flex items-center border-2 border-amazon_light hover:border-white cursor-pointer duration-100 bg-gradient-to-r from-amazon_blue to-amazon_light">
                    <div className="w-24 h-9 object-contain">
                        <Image className="object-contain sm:w-24 sm:h-9 aspect-auto" src={logo} width={595} height={439} alt="Logo"/>
                    </div>
                    
                </div>
                <div className="headerHover">
                    <LiaMapMarkerAltSolid />
                    <p className="text-sm text-lightText font-light flex flex-col">
                        Deliver to&nbsp;
                        <span className="text-sm font-semibold -mt-1 text-whiteText">
                            {location}
                        </span>
                    </p>
                </div>
                <div className="h-10 rounded-md flex flex-grow relative">
                    <span onClick={()=>setShowDropdown(!showDropdown)} 
                    className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
                    >All&nbsp;
                        <span><IoMdArrowDropdown /></span>
                    </span>
                    {
                        showDropdown && (
                            <div>
                                <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border border-amazon_blue text-black p-2 flex-col gap-1 z-50">
                                    {
                                        listItems.map((item, index) => (
                                            <li key={index} className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">{item.text}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )
                    }

                    <input 
                        type="search"
                        className="w-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => {void searchAction(search, e)}}
                        placeholder="Search for items here..."
                    />


                    <div
                        onClick={()=> void searchAction(search)} className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
                            <IoSearch />
                    </div>
                    
                </div>
                
                <DropdownComponent id={"login"} items={[
                    (session ? {text: "Sign Out", url: "/api/auth/signout"} : {text: "Sign In", url: "/api/auth/signin"}),
                    {text: "Your Orders", url: "/"},
                    {text: "Your Lists", url: "/"},
                    {text: "Your Account", url: "/"},
                    {text: "Sell on Amazon", url: "/"},
                    {text: "Help", url: "/"},
                ]}>
                <div className="flex flex-col items-start justify-center relative cursor-pointer">
                        <div onClick={() => session ? router.push(`/userpages`) : router.push(`/api/auth/signin`)}>
                            <p className="text-xs text-lightText font-light">Hello, {session?.user ? session.user.name : "sign in"}</p>
                            <p className="flex items-center text-sm font-semibold -mt-1 text-whiteText">
                                Account & Lists&nbsp;<span><IoMdArrowDropdown /></span>
                            </p>
                        </div>
                </div>
                    
                </DropdownComponent>
                <div className="flex flex-col items-start justify-center headerHover">
                    <p className="text-xs text-lightText font-light">Returns</p>
                    <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
                </div>
                <div onClick={()=>{router.push("/addToCart")}} className="flex items-center headerHover relative">
                    <FaShoppingCart className="mr-1 -mb-2 text-xl"/>
                    <p className="text-xs font-semibold mt-3 text-whiteText">
                        &nbsp;Cart 
                        <span className="absolute text-xs top-0 left-5 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                            0
                        </span>
                    </p>
                </div>
            </div>
            <Bottomnavbar />
            
        </div>
    )
}

export default TopNavbar;