import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { bottomBarItems } from "../constants/BottomBarItems";
import { RiAccountCircleFill } from "react-icons/ri";
import SideBarContent from "./SidebarContent";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Bottomnavbar: React.FC = () => {
    // Ref for sidebar
    const ref = useRef<HTMLDivElement>(null);
    // State for sidebar
    const [sidebar, setSidebar] = useState(false);

    // Close sidebar when clicking outside of it
    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if(!(ref.current && ref.current.contains(e.target as Node))){
                setSidebar(false);
            }
        })
    }, [ref, sidebar])
    return (
        <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
            <ul className="flex items-center gap-2 text-sm tracking-wide">
                <li onClick={()=>setSidebar(true)} className="flex items-center headerHover gap-1">
                    <GiHamburgerMenu className="text-xl"/>&nbsp;All
                </li>
                {
                    bottomBarItems.map((item, index) => (
                        <li key={index} className="headerHover">{item.text}</li>
                    ))
                }
            </ul>
            <AnimatePresence>
                {sidebar && (
                    <div className="w-full h-full text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50 z-50">
                        <motion.div ref={ref} initial={{x:-500}} animate={{x:0}} transition={{duration:0.3}} exit={{x:-500}} className="w-[365px] h-full bg-white border border-black absolute top-0 left-0">
                            <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-3">
                                <RiAccountCircleFill className="text-3xl"/>
                                <h3 className="font-titleFont font-bold text-lg tracking-wide">Hello, sign In</h3>
                            </div>
                            <SideBarContent title={"Trending"} items={["Best Sellers", "New Releases"]} />
                            <SideBarContent title={"Shop by Department"} items={["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"]} />
                            <SideBarContent title={"Help and Settings"} items={["Your account", "English", "United States", "Sign Out"]}  />
                            <span onClick={()=>setSidebar(false)} className="cursor-pointer absolute top-[1px] right-[1px] w-10 h-10 flex items-center justify-center hover:bg-red-500 text-white duration-300">
                                <IoCloseSharp className="text-3xl"/>
                            </span>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            
        </div>
    )
}

export default Bottomnavbar;