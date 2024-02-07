import React from "react";
import { FaAngleRight } from "react-icons/fa";

const SideBarContent = ({title, one, two, three, four, five}) => {
    return (
        <div className="py-5 border-b-[1px] border-b-gray-300">
            <h3 className="text-lg font-titleFont font-medium mb-1 px-8">{title}</h3>
            <ul>
                <li className="flex items-center justify-between hover:bg-[#BAC4C8] px-8 py-3 cursor-pointer text-sm">{one}</li>
                <li className="flex items-center justify-between hover:bg-[#BAC4C8] px-8 py-3 cursor-pointer text-sm">{two}</li>
                <li className="flex items-center justify-between hover:bg-[#BAC4C8] px-8 py-3 cursor-pointer text-sm">{three}</li>
                <li className="flex items-center justify-between hover:bg-[#BAC4C8] px-8 py-3 cursor-pointer text-sm">{four}</li>
                <li className="flex items-center justify-between hover:bg-[#BAC4C8] px-8 py-3 cursor-pointer text-sm">{five}</li>
            </ul>
        </div>
        
    )
}

export default SideBarContent;