import React from "react";

interface interfaceProps {
    title: string,
    one?: string,
    two?: string,
    three?: string,
    four?: string,
    five?: string,
}
const SideBarContent = ({title, one, two, three, four, five}: interfaceProps) => {
    return (
        <div className="py-5 border-b-[1px] border-b-gray-300">
            <h3 className="text-lg font-titleFont font-medium mb-1 px-8">{title}</h3>
            <ul>
                {one && <li className="flex items-center justify-between hover:bg-[#BAC4C8] px-8 py-3 cursor-pointer text-sm">{one}</li>}
                {two && <li className="flex items-center justify-between hover:bg-[#BAC4C8] px-8 py-3 cursor-pointer text-sm">{two}</li>}
                {three && <li className="flex items-center justify-between hover:bg-[#BAC4C8] px-8 py-3 cursor-pointer text-sm">{three}</li>}
                {four && <li className="flex items-center justify-between hover:bg-[#BAC4C8] px-8 py-3 cursor-pointer text-sm">{four}</li>}
                {five && <li className="flex items-center justify-between hover:bg-[#BAC4C8] px-8 py-3 cursor-pointer text-sm">{five}</li>}
            </ul>
        </div>  
        
    )
}

export default SideBarContent;