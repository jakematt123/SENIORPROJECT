import React from 'react';
import { FaUser, FaMapMarker, FaShoppingCart, FaCog } from 'react-icons/fa';
const Profiles = () => {
    return (
        <div className="flex">
            {/* Left side with the list */}
            <div className="w-1/3 border-r p-4">
                <h1 className="text-4xl mb-4">My Account</h1>
                <ul className="space-y-2">
                    <li
                        className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-100"
                    >
                        <FaUser className="mr-2 text-blue-500" />
                        <span className="text-lg font-semibold">My Details</span>
                    </li>
                    <li
                        className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-100"
                    >
                        <FaMapMarker className="mr-2 text-green-500" />
                        <span className="text-lg font-semibold">My Addresses</span>
                    </li>
                    <li
                        className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-100"
                    >
                        <FaShoppingCart className="mr-2 text-yellow-500" />
                        <span className="text-lg font-semibold">My Orders</span>
                    </li>
                    <li
                        className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-100"
                    >
                        <FaCog className="mr-2 text-purple-500" />
                        <span className="text-lg font-semibold">Account Settings</span>
                    </li>
                </ul>
            </div>
            {/* Right side with information */}
            <div className="w-2/3 p-4 border-l">
                <div className="border rounded-lg p-4 bg-gray-100">
                    <h2 className="text-3xl mb-4">Information</h2>
                    <p className="text-lg">
                        This section will display detailed information based on the selected
                        item.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profiles;