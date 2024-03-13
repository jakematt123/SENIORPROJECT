import React, {useState} from 'react';
import { Session } from 'next-auth';
import Link from 'next/link';

interface MenuItem {
    text: string;
    url: string;
}

const DropdownComponent: React.FC<{id: string, session?: Session | null, children, items: MenuItem[]}> = ({ id, session, children, items}) => {
    const [dropDownStates, setDropdownStates] = useState<boolean[]>(new Array().fill(false));

    const handleDropDownVisibility = (id: string, isVisible: boolean) => {
        setDropdownStates((prevState) => {
            const updatedStates = [...prevState];
            updatedStates[id] = isVisible;
            return updatedStates;
        });
    }
    
    /*
    <div onClick={() => router.push("/api/auth/signin")} className="cursor-pointer">
                <p className="text-xs text-lightText font-light">Hello, {session.user ? session.user.name : "sign in"}</p>
                <p className="flex items-center text-sm font-semibold -mt-1 text-whiteText">
                    Account & Lists&nbsp; 
                    <span>
                        <IoMdArrowDropdown />
                    </span>
                </p>
            </div>
    */

    return (
        <div 
            onMouseEnter={() => (handleDropDownVisibility(id, true))} 
            className="flex flex-col items-start justify-center headerHover relative cursor-pointer"
        >
            {children}
            {dropDownStates[id] && (
                <ul 
                    className="absolute w-56 top-full left-0 mt-1 overflow-y-scroll overflow-x-hidden bg-white border border-amazon_blue text-black p-2 flex-col gap-1 z-50"
                    onMouseEnter={() => handleDropDownVisibility(id, true)}
                    onMouseLeave={() => handleDropDownVisibility(id, false)}
                >
                    {
                        items.map((item, index) => (
                            <li key={index} className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                                <Link href={item.url}>{item.text}</Link>
                            </li>
                        ))
                    }
                    
                </ul>
            )}
        </div>
    );
}

export default DropdownComponent;
