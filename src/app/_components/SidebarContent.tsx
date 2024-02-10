import React from "react";

interface sidebarContentProps {
    title: string,
    items: string[]
}
const SideBarContent = ({ title, items }: sidebarContentProps) => {
    return (
        <div className="py-5 border-b-[1px] border-b-gray-300">
            <h3 className="text-lg font-titleFont font-medium mb-1 px-8">{title}</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className="px-8 py-2 text-sm font-titleFont font-normal hover:bg-gray-100 cursor-pointer">{item}</li>
                ))}
            </ul>
        </div>  
        
    )
}

export default SideBarContent;