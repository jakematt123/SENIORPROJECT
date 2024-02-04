import React, { useState } from 'react';
import { IconButton } from '@material-tailwind/react';
import { FaMagnifyingGlass } from "react-icons/fa6";

// Define types for props
interface NavbarProps {
  links: { text: string; url: string }[];
}

// Navbar component
const Navbar: React.FC<NavbarProps> = ({ links }) => {

  const [search, setSearch ] = useState("")
  const onChange = ({ target }: any) => setSearch(target.value)

  const OnPress = () => {
    alert(search)
  }

  return (
    <nav className="bg-[#202A44] p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <a href='/'><img src="RaysLogoTransparent.png" alt="Logo" className="h-10 mr-2 bg-black rounded-md bg-opacity-35" /></a>
        <div className='relative flex flex-grow py-1 px-2 items-center width 1200px'>
          <a>
            <FaMagnifyingGlass/>
          </a>
          <div className="flex">
            <input 
              type="search"
              value={search}
              onInput={onChange}
              placeholder='Search Amazoon'
              className='rounded py-2 px-4 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full border border-gray-300'
              style={{ width: '1300px' }}
            />
            <div className="absolute right-0 mr-2">
              <IconButton
                size='sm'
                color={search ? "amber" : "orange"}
                onClick={OnPress}
                placeholder={undefined}
              >
                <FaMagnifyingGlass/>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      
      <ul className="flex space-x-4">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} className="text-white hover:text-gray-300">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
