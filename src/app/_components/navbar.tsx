import React from 'react';

// Define types for props
interface NavbarProps {
  title: string;
  links: { text: string; url: string }[];
}

// Navbar component
const Navbar: React.FC<NavbarProps> = ({ title, links }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">{title}</div>
        <ul className="flex space-x-4">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url} className="text-white hover:text-gray-300">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
