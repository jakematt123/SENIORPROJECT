"use client"
import React from 'react';
import { Input, Card, Button } from '@material-tailwind/react';
import Navbar from '../_components/navbar';



const Home: React.FC = () => {

    const navLinks = [
        { text: 'Home', url: '/' },
        { text: 'About', url: '/about' },
        { text: 'Contact', url: '/contact' },
        { text: 'Login', url: '/login'},
        { text: 'Store', url: '/store'}
    ];

  return (
    <div className="bg-gray-100 min-h-screen">
        <Navbar links={navLinks}></Navbar>

      {/* Main Content */}
      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4">Best Sellers</h2>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card placeholder={undefined}>
            <img
              src="/product1.jpg"
              alt="Product 1"
              className="object-cover w-full h-40"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Product 1</h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer nec odio. Praesent libero.
              </p>
              <Button color="indigo" ripple={true} placeholder={undefined}>
                $19.99
              </Button>
            </div>
          </Card>
          <Card placeholder={undefined}>
            <img
              src="/product2.jpg"
              alt="Product 2"
              className="object-cover w-full h-40"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Product 2</h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer nec odio. Praesent libero.
              </p>
              <Button color="indigo" ripple={true} placeholder={undefined}>
                $29.99
              </Button>
            </div>
          </Card>
          <Card placeholder={undefined}>
            <img
              src="/product3.jpg"
              alt="Product 3"
              className="object-cover w-full h-40"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Product 3</h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer nec odio. Praesent libero.
              </p>
              <Button color="indigo" ripple={true} placeholder={undefined}>
                $39.99
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Home;