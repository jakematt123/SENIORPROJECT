import React from 'react';
import { Card, Button } from '../_components/ClientExports';
import Navbar from '../_components/navbar/Navbar';
import Image from 'next/image';
import Footer from '../_components/footer/Footer';
import { db } from '~/server/db';
import deal1 from "../../../assets/deal1.jpg"
import deal2 from "../../../assets/deal2.jpg"
import deal3 from "../../../assets/deal3.jpg"


export const DiscountedItem = ({ originalPrice, discountedPrice }) => {
  return (
    <div className="flex items-center space-x-2  text-black font-bold text-lg">
      <span className="line-through text-orange-500">${originalPrice}</span>
      <span className="font-bold">${discountedPrice}</span>
    </div>
  );
};


const ReviewStars = ({rating, reviewCount}) => {
  return ( 
    <div className="flex items-center mb-2">
        <svg className="w-4 h-4 text-yellow-700 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">{rating}</p>
        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
        <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{reviewCount} reviews</a>
    </div>
  );
}


const Home: React.FC = () => {

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar/>

      {/* Main Content */}
      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4">Todays Deals</h2>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card placeholder={undefined}>
            <Image
              src={deal1}
              alt="Home Weight Set"
              className="object-scale-down w-full h-40"
              width={500}
              height={500}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Home Weight Set</h3>
              <ReviewStars rating={4.96} reviewCount={22}/>
              <p className="text-gray-700 mb-4">
                Comes in 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 lb sets.
              </p>
              <div className='relative'>
                <DiscountedItem originalPrice={40.99} discountedPrice={20.99} />
                <Button color="indigo" ripple={true} placeholder={undefined}>Add to Cart</Button>
              </div>
              
            </div>
          </Card>
          <Card placeholder={undefined}>
            <Image
              src={deal2}
              alt="iPhone Charging Cable Valuepack"
              className="object-scale-down w-full h-40"
              width={500}
              height={500}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Charing Cables</h3>
              <ReviewStars rating={4.8} reviewCount={12}/>
              <p className="text-gray-700 mb-4">
                iPhone Charging Cable Valuepack - 3 cables included.
              </p>
              <div className='relative'>
                <DiscountedItem originalPrice={29.99} discountedPrice={15.99} />
                <Button color="indigo" ripple={true} placeholder={undefined}>Add to Cart</Button>
              </div>
            </div>
          </Card>
          <Card placeholder={undefined}>
            <Image
              src={deal3}
              alt="No Show Men Socks"
              className="object-scale-down w-full h-40"
              width={500}
              height={500}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">No Show Men Socks</h3>
              <ReviewStars rating={4.5} reviewCount={8}/>
              <p className="text-gray-700 mb-4">
                No Show Men Socks, Low Cut Ankle Sock, Men Short Socks Casual Cotton Socks 
              </p>
              <div className='relative'>
                <DiscountedItem originalPrice={25.95} discountedPrice={15.95} />
                <Button color="indigo" ripple={true} placeholder={undefined}>Add to Cart</Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
